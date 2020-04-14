<template>
  <box :class="$style.IconPicker">
    <el-popover
      :popper-class="$style['IconPicker-popper']"
      placement="bottom"
      width="400"
      trigger="manual"
      v-model="isVisible"
    >
      <ss-button :class="$style['IconPicker-trigger']" slot="reference" @click="isVisible = !isVisible">
        <i :class="chosenIcon" v-if="chosenIcon"></i>
        <template v-else
          >选择图标</template
        >
        <i class="el-icon-arrow-down el-icon--right"></i>
      </ss-button>
      <box :class="$style['IconPicker-container']">
        <template v-if="icons && icons.length > 0">
          <box :class="$style['IconPicker-filter']">
            <el-input placeholder="查找图标" v-model="filterKeyword" :validate-event="false" @input="handleFilter" />
          </box>
          <box :class="$style['IconPicker-content']">
            <grid-row>
              <grid-col :class="$style['IconPicker-icon']" :span="4" v-for="icon in iconList" :key="icon.id">
                <ss-button @click="handleSelect(icon)">
                  <i :class="icon.iconName"></i>
                </ss-button>
              </grid-col>
            </grid-row>
          </box>
        </template>
        <box :class="$style['IconPicker-empty']" v-else>暂无图标</box>
      </box>
    </el-popover>
  </box>
</template>

<style lang="scss" module>
.IconPicker {
  display: inline-block;

  &-popper {
    padding: 0 !important;
  }

  &-filter {
    margin: 15px 15px 0;
  }

  &-content,
  &-empty {
    padding: 15px;
  }

  &-content {
    max-height: 300px;
    overflow: auto;
  }

  &-icon {
    .el-button {
      position: relative;
      display: block;
      width: 100%;
      padding: 0;
      text-align: center;
      border-style: none;

      i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
      }

      &:after {
        content: '\0020';
        display: block;
        padding-top: 100%;
      }
    }
  }
}
</style>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { throttle } from 'throttle-debounce';
import { Popover as ElPopover, Input as ElInput } from 'element-ui';
import Box from '../box/Box.vue';
import { SsButton } from '../button';
import GridRow from '../grid/Row.vue';
import GridCol from '../grid/Col.vue';
import { IconType, IIcon } from './types';

enum IconPickerMode {
  Popover = 'popover',
  Dialog = 'dialog',
}

@Component({
  components: {
    ElPopover,
    ElInput,
    Box,
    SsButton,
    GridRow,
    GridCol,
  },
})
export default class IconPicker extends Vue {
  // @Prop({ type: String, default: IconPickerMode.Popover })
  // mode?: IconPickerMode;

  /**
   * 当前选中的图标
   */
  @Prop({ type: String, default: '' })
  value?: string;

  /**
   * 图标列表
   */
  @Prop({ type: Array, default: () => [] })
  icons!: IIcon[];

  @Watch('value', { immediate: true })
  onValueChange(val: string) {
    this.chosenIcon = val;
  }

  @Watch('icons', { immediate: true })
  onIconsChange(val: IIcon[]) {
    this.iconList = val;

    // 获取 IconFont 和 SVG 类型的图标资源文件 URL 列表
    val.forEach(({ iconType, file }) => {
      if ([IconType.IconFont, IconType.SVG].indexOf(iconType) > -1 && file) {
        this.resourceList.push(file.url);
      }
    });
  }

  // 渲染用图标数据
  private iconList!: IIcon[];

  // 图标资源文件
  private resourceList: string[] = [];

  // 图标浮层显示状态
  private isVisible: boolean = false;

  // 选中图标
  private chosenIcon: string = '';

  // 筛选图标的关键字
  private filterKeyword: string = '';

  // 筛选图标处理
  private handleFilter!: Function;

  /**
   * 添加图标资源
   */
  private appendIconResources(): void {
    const head = document.querySelectorAll('head')[0];

    this.resourceList.forEach(r => {
      const matchResult = r.match(/.+\.(css|js)$/) || [];
      const extName = matchResult[1];

      let tagName;
      let tagAttr;

      if (extName === 'css') {
        tagName = 'link';
        tagAttr = 'href';
      } else if (extName === 'js') {
        tagName = 'script';
        tagAttr = 'src';
      }

      if (tagName && tagAttr && document.querySelectorAll(`${tagName}[${tagAttr}="${r}"]`).length === 0) {
        const el = document.createElement(tagName);

        el[tagAttr] = r;

        head.appendChild(el);
      }
    });
  }

  /**
   * 选中图标后的处理
   */
  handleSelect(icon: IIcon): void {
    this.isVisible = false;
    this.filterKeyword = '';
    this.iconList = this.icons;
    this.chosenIcon = icon.iconName || '';

    this.$emit('change', { ...icon });
  }

  created(): void {
    this.handleFilter = throttle(300, true, v => {
      this.iconList = v === '' ? this.icons : this.icons.filter(i => (i.iconName || '').indexOf(v) > -1);
    });

    this.appendIconResources();
  }

  destroyed(): void {
    this.resourceList = [];
  }
}
</script>
