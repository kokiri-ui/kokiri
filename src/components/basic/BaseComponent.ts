import { VueConstructor } from 'vue';
import { Vue, Component, Prop } from 'vue-property-decorator';
import { IBaseComponent } from '../../typing/interfaces/basic';

@Component
class BaseComponent extends Vue implements IBaseComponent {
  @Prop({ type: [String, Function] })
  public readonly tag?: string | VueConstructor;

  protected getComponentClassName(): string {
    return '';
  }
}

export { BaseComponent };
