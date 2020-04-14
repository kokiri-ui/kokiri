import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { PopoverPlacement } from 'element-ui/types/popover';
import { ComplexPlacement } from '../../typing';

@Component
export default class PopupLayer extends Vue {
  @Prop({ type: String, default: 'top' })
  public readonly placement!: ComplexPlacement;

  @Prop({ type: String })
  public readonly popupWrapperClass?: string;

  @Prop({ type: String, default: '' })
  public readonly popupClass!: string;

  @Watch('placement', { immediate: true })
  private handlePlacementChange(val: ComplexPlacement): void {
    let placement: PopoverPlacement;

    switch (val) {
      case 'top-left':
        placement = 'top-start';
        break;
      case 'top-right':
        placement = 'top-end';
        break;
      case 'right-top':
        placement = 'right-start';
        break;
      case 'right-bottom':
        placement = 'right-end';
        break;
      case 'bottom-left':
        placement = 'bottom-start';
        break;
      case 'bottom-right':
        placement = 'bottom-end';
        break;
      case 'left-top':
        placement = 'left-start';
        break;
      case 'left-bottom':
        placement = 'left-end';
        break;
      default:
        placement = val;
    }

    this.popupPlacement = placement;
  }

  protected popupPlacement!: PopoverPlacement;
}
