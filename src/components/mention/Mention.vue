<template>
  <box :class="$style.Mention">
    <text-area
      :class="$style['Mention-content']"
      ref="textarea"
      resize="none"
      :placeholder="placeholder"
      :value="currentValue"
      :disabled="disabled"
      :clearable="clearable"
      :rows="rows"
      @input="handleInput"
      @change="handleChange"
      @key-down="handleKeyDown"
      @key-up="handleKeyUp"
      @click="handleClick"
      @blur="handleBlur"
    />
    <box ref="measure" :class="$style['Mention-measure']" v-if="isOpen">
      <ss-text>{{ currentValue.slice(0, measureLocation) }}</ss-text>
      <trigger ref="trigger" :suggestions="filteredSuggestions" @select="selectOption" @mounted="updateMeasure">
        <ss-text>{{ measurePrefix }}</ss-text>
      </trigger>
      <ss-text>{{ currentValue.slice(measureLocation + measurePrefix.length) }}</ss-text>
    </box>
  </box>
</template>

<style lang="scss" module>
@include component-rules($__mention-component-name) {
  position: relative;
  white-space: pre-wrap;

  textarea,
  &-measure {
    margin: 0;
    padding: 4px 11px;
    overflow-x: initial;
    overflow-y: auto;
    font-weight: inherit;
    font-size: inherit;
    font-family: inherit;
    font-style: inherit;
    font-variant: inherit;
    font-size-adjust: inherit;
    font-stretch: inherit;
    line-height: inherit;
    direction: inherit;
    letter-spacing: inherit;
    white-space: inherit;
    text-align: inherit;
    vertical-align: top;
    word-wrap: break-word;
    word-break: inherit;
    tab-size: inherit;
  }

  &-measure {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    pointer-events: none;
    border: 1px solid transparent;
    z-index: -1;
  }
}
</style>

<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator';
import KeyCode from '../../helper/utils/key-code';
import { Box } from '../box';
import { TextArea } from '../text-area';
import { Popover } from '../popover';
import { SsText } from '../text';
import Trigger from './Trigger.vue';
import {
  getBeforeSelectionText,
  getAfterSelectionText,
  getLastMeasureIndex,
  omit,
  Omit,
  replaceWithMeasure,
  setInputSelection,
  filterOption as defaultFilterOption,
  OptionItem,
  validateSearch as defaultValidateSearch,
  IFilterOption,
  IValidateSearch,
  SuggestionItem,
  resolveOptions,
} from './util';

interface MentionsEntity extends OptionItem {
  prefix: string;
}

@Component({
  components: {
    Box,
    TextArea,
    Trigger,
    SsText,
  },
})
export default class SsMention extends Vue {
  @Prop({ type: String, default: '' })
  readonly value!: string;

  @Prop({ type: String, default: '' })
  readonly placeholder!: string;

  @Prop({ type: Number, default: 3 })
  readonly rows!: number;

  @Prop({ type: Boolean, default: false })
  readonly disabled!: boolean;

  @Prop({ type: Boolean, default: false })
  readonly clearable!: boolean;

  @Prop({ type: String, default: ' ' })
  readonly split!: string;

  @Prop({ type: [String, Array], default: '@' })
  readonly prefix!: string | string[];

  @Prop({ type: Function, default: defaultFilterOption })
  readonly filter!: IFilterOption;

  @Prop({ type: Function, default: defaultValidateSearch })
  readonly validate!: IValidateSearch;

  @Prop({
    type: [Array, Object],
    default: () => [],
  })
  readonly suggestions!: SuggestionItem[] | { [key: string]: SuggestionItem[] };

  @Ref() readonly textarea!: TextArea;
  @Ref() readonly trigger!: Trigger;
  @Ref() readonly measure!: Box;

  @Watch('value', { immediate: true })
  private handleValueChange(val) {
    this.currentValue = val;
  }

  @Emit('input')
  private handleInput(val) {
    this.currentValue = val;
  }

  @Emit('change')
  private handleChange(val) {
    this.currentValue = val;
  }

  private currentValue: string = '';
  private activeIndex: number = 0;
  private isOpen: boolean = false;
  private measureLocation = 0;
  private measureText: string | null = null;
  private measurePrefix: string = '';
  private mentionStart: number = 0;
  private mentionEnd: number = 0;
  private filteredSuggestions: OptionItem[] = [];

  public getMentions(): MentionsEntity[] {
    const { currentValue: value, prefix, split } = this;
    const prefixList: string[] = Array.isArray(prefix) ? prefix : [prefix];

    return value
      .split(split)
      .map((str = '') => {
        let hitPrefix: string | null = null;

        prefixList.some(prefixStr => {
          const startStr = str.slice(0, prefixStr.length);
          if (startStr === prefixStr) {
            hitPrefix = prefixStr;
            return true;
          }
          return false;
        });

        if (hitPrefix !== null) {
          return {
            prefix: hitPrefix as string,
            label: str.slice(hitPrefix!.length),
          };
        }
        return null;
      })
      .filter((entity): entity is { prefix: string; label: string } => !!entity && !!entity.label)
      .reduce((prev: MentionsEntity[], current): MentionsEntity[] => {
        const suggestions = this.getSuggestionsByPrefix(current.prefix);
        const foundSuggestion = suggestions.find(option => option.label === current.label);

        if (foundSuggestion) {
          return [...prev, { prefix: current.prefix, ...foundSuggestion }];
        } else {
          return prev;
        }
      }, []);
  }

  private suggestionsFilter() {
    const targetMeasureText = this.measureText || '';
    const { filter, measurePrefix } = this;
    const suggestions = this.getSuggestionsByPrefix(measurePrefix);

    const list = suggestions.filter(option => {
      return filter(targetMeasureText, option);
    });

    this.filteredSuggestions = list;
  }

  private getSuggestionsByPrefix(prefix: string): OptionItem[] {
    const suggestions = this.suggestions;
    let prefixedSuggestions = Array.isArray(suggestions) ? suggestions : suggestions[prefix];

    if (!prefixedSuggestions) {
      prefixedSuggestions = [];
    }

    return resolveOptions(prefixedSuggestions);
  }

  private startMeasure(
    measureText: string,
    measurePrefix: string,
    measureLocation: number,
    mentionStart: number,
    mentionEnd: number,
  ) {
    this.openDropdown();
    this.measureText = measureText;
    this.measurePrefix = measurePrefix;
    this.measureLocation = measureLocation;

    this.mentionStart = mentionStart;
    this.mentionEnd = mentionEnd;

    this.suggestionsFilter();

    // Wait trigger created
    this.$nextTick(() => {
      this.activeIndex = 0;
      this.trigger.updateActiveItem(this.activeIndex);
    });
  }

  private stopMeasure(callback?: () => void) {
    this.closeDropdown();
    this.mentionStart = 0;
    this.measureText = null;
    this.filteredSuggestions = [];

    if (callback) {
      this.$nextTick(callback);
    }
  }

  private handleKeyDown(evt) {
    const { which } = evt;
    const { activeIndex, isOpen } = this;

    if (!isOpen) {
      return;
    }

    if (which === KeyCode.UP) {
      // Control arrow function
      this.moveActiveItem(-1);
      evt.preventDefault();
    } else if (which === KeyCode.DOWN) {
      this.moveActiveItem(1);
      evt.preventDefault();
    } else if (which === KeyCode.ESC) {
      this.stopMeasure();
    } else if (which === KeyCode.ENTER) {
      // Measure hit
      const option = this.filteredSuggestions[activeIndex];
      this.selectOption(option);
      evt.preventDefault();
    }
  }

  private handleKeyUp(e) {
    const { key, which } = e;

    // Skip if match the white key list
    if ([KeyCode.ESC, KeyCode.UP, KeyCode.DOWN, KeyCode.ENTER].indexOf(which) !== -1) {
      return;
    }

    this.validateMeasure(e);
  }

  private handleClick(e) {
    this.stopMeasure(() => {
      this.validateMeasure(e);
    });
  }

  private selectOption(option: OptionItem) {
    if (!option) {
      // 避免换行再删除字符后 measuring 状态保留
      this.currentValue += ' ';
      this.stopMeasure();
      return;
    }

    const { currentValue, mentionStart, mentionEnd, measurePrefix, split } = this;
    const textareaEl = this.textarea.$el.firstChild as HTMLTextAreaElement;
    const value = textareaEl.value;
    const replacedValue = `${option.label} `;

    this.currentValue = `${value.slice(0, mentionStart)}${replacedValue}${value.slice(mentionEnd)}`;
    this.stopMeasure(() => {
      // We need restore the selection position
      setInputSelection(textareaEl, mentionStart + replacedValue.length);
    });

    this.$emit('select', { ...option, prefix: this.measurePrefix });
  }

  private validateMeasure(e) {
    const { measureText: prevMeasureText, isOpen, prefix = '', validate, split } = this;
    const target = e.target as HTMLTextAreaElement;
    const value = target.value;
    const selectionStart = target.selectionStart;
    const beforeSelectionText = getBeforeSelectionText(target);
    const afterSelectionText = getAfterSelectionText(target);
    const { location: measureIndex, prefix: measurePrefix } = getLastMeasureIndex(beforeSelectionText, prefix);
    const startPos = measureIndex + measurePrefix.length;
    let endPos = afterSelectionText.indexOf(split);

    if (endPos === -1) {
      endPos = value.length;
    } else {
      endPos += beforeSelectionText.length;
    }

    if (measureIndex !== -1) {
      const measureText = value.slice(startPos, endPos);
      const validateMeasure: boolean = validate(measureText, split);

      if (validateMeasure) {
        if (isOpen || measureText !== prevMeasureText) {
          this.startMeasure(measureText, measurePrefix, measureIndex, startPos, endPos);
        }
      } else if (isOpen) {
        this.stopMeasure();
      }

      /**
       * We will trigger `onSearch` to developer since they may use for async update.
       * If met `space` means user finished searching.
       */
      // TODO: 异步查询suggestions
      // if (onSearch && validateMeasure) {
      //   onSearch(measureText, measurePrefix);
      // }
    } else if (isOpen) {
      this.stopMeasure();
    }
  }

  private handleBlur(event) {
    this.stopMeasure();
  }

  private moveActiveItem(step: number) {
    const optionLen = this.filteredSuggestions.length;
    const newActiveIndex = (this.activeIndex + step + optionLen) % optionLen;

    this.activeIndex = newActiveIndex;
    this.trigger.updateActiveItem(this.activeIndex);
  }

  private openDropdown() {
    this.isOpen = true;
  }

  private closeDropdown() {
    this.isOpen = false;
  }

  private updateMeasure() {
    const measureEl = this.measure.$el;
    const textareaEl = this.textarea.$el.firstChild as HTMLTextAreaElement;
    measureEl.scrollTop = textareaEl.scrollTop;

    this.trigger.openSuggestion();
  }
}
</script>
