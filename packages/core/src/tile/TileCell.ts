import { ITileCellComponent } from 'petals-ui/dist/tile';

import { Component, Prop } from 'vue-property-decorator';

import { BaseStructuralComponent } from '../basic';

@Component
class TileCellStructuralComponent extends BaseStructuralComponent implements ITileCellComponent {
  @Prop({ type: Number, required: true })
  public readonly width!: number;

  @Prop({ type: Number, required: true })
  public readonly height!: number;
}

export { TileCellStructuralComponent };
