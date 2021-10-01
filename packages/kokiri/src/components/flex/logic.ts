import { Component } from 'vue-property-decorator';

import { getComponentName, FlexStructuralComponent } from '@kokiri/core/dist/flex';

@Component({
  name: getComponentName(),
})
export default class Flex extends FlexStructuralComponent {}
