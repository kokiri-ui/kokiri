<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from 'vue-property-decorator';
import Suggestion from './Suggestion.vue';
import { getDocumentOffset } from '../../helper/utils';
import { OptionItem } from './util';

@Component({
  components: {
    Suggestion,
  },
})
export default class SsTrigger extends Vue {
  @Prop({ type: Array, default: () => [] })
  readonly suggestions!: OptionItem[];

  @Emit('select')
  selectItem(option: OptionItem) {}

  @Watch('suggestions')
  updateOptions(val, oldVal) {
    this.$suggestion.options = val;
  }

  private $popper: any = null;
  private $suggestion: any = null;

  public active: number = -1;

  updateActiveItem(index) {
    this.$suggestion.active = index;
  }

  openSuggestion() {
    const {
      $slots: { default: vNodes },
    } = this as any;
    const $span = vNodes[0].elm;
    const offset = getDocumentOffset($span);
    const $el = document.createElement('div');

    $el.style.position = 'fixed';
    $el.style.top = `${offset.top + $span.offsetHeight}px`;
    $el.style.left = `${offset.left + $span.offsetWidth}px`;

    document.body.appendChild($el);

    this.$popper = $el;
    this.$suggestion = new Suggestion().$mount();
    this.$suggestion.options = this.suggestions;
    this.$suggestion.$on('select', option => this.selectItem(option));

    $el.appendChild(this.$suggestion.$el);
  }

  render(h) {
    return this.$slots.default;
  }

  mounted() {
    this.$emit('mounted');
  }

  beforeDestroy() {
    if (this.$suggestion) {
      this.$suggestion.$destroy();
    }

    this.$suggestion = null;

    if (this.$popper) {
      document.body.removeChild(this.$popper);
    }

    this.$popper = null;
  }
}
</script>
