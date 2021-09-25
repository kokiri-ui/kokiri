import { ResizeType } from 'petals-ui/dist/basic';
import { FormControlSize } from 'petals-ui/dist/form-control';
import { ITextAreaComponent, TextAreaHeadlessComponent } from 'petals-ui/dist/text-area';
import { CreateElement, VNode } from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Input as IvuInput } from 'view-design';

import { getComponentName, BaseStructuralComponent } from '../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('textArea'),
})
export default class TextArea
  extends BaseStructuralComponent<TextAreaHeadlessComponent>
  implements ITextAreaComponent {
  @Prop({ type: String, default: '' })
  public readonly name!: string;

  @Prop({ type: String, default: '' })
  public readonly value!: string;

  @Prop({ type: Boolean, default: false })
  public readonly disabled!: boolean;

  @Prop({ type: Boolean, default: false })
  public readonly readonly!: boolean;

  @Prop({ type: String, default: '' })
  public readonly placeholder!: string;

  @Prop({ type: Boolean, default: false })
  public readonly clearable!: boolean;

  @Prop({ type: String, default: 'medium' })
  public readonly size!: FormControlSize;

  @Prop({ type: Number })
  public readonly minLength!: number;

  @Prop({ type: Number })
  public readonly maxLength!: number;

  @Prop({ type: Number, default: 2 })
  public readonly rows!: number;

  @Prop({ type: Boolean, default: false })
  public readonly wordage!: boolean;

  @Prop({ type: String })
  public readonly resize!: ResizeType;

  public render(h: CreateElement): VNode {
    const props: Record<string, any> = {
      type: 'textarea',
      name: this.name,
      value: this.value,
      disabled: this.disabled,
      readonly: this.readonly,
      placeholder: this.placeholder,
      clearable: this.clearable,
      rows: this.rows,
      showWordLimit: this.wordage,
    };

    if (this.size === 'large' || this.size === 'small') {
      props.size = this.size;
    }

    if (this.maxLength) {
      props.maxlength = this.maxLength;
    }

    if (this.minLength) {
      props.minlength = this.minLength;
    }

    return h(IvuInput, { props });
  }

  public created(): void {
    this.setHeadlessComponent(new TextAreaHeadlessComponent(this));
  }
}
