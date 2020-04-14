import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { SizeType } from '../../typing';

type ElSizeType = '' | 'medium' | 'small' | 'mini';

function convertSize(size: SizeType): ElSizeType {
  return size === 'large' ? '' : size === 'small' ? size : 'medium';
}

@Component
export default class SizeControl extends Vue {
  @Prop({ type: String, default: '' })
  public readonly size!: SizeType;

  @Watch('size', { immediate: true })
  private handleSizeChange(val: SizeType): void {
    this.resolvedSize = convertSize(val);
  }

  protected resolvedSize!: string;
}
