import { Component } from 'vue-property-decorator';

import { getComponentName, ParagraphStructuralComponent } from '@kokiri/core/dist/paragraph';

@Component({
  name: getComponentName(),
})
export default class Paragraph extends ParagraphStructuralComponent {}
