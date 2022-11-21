import { Component } from 'vue-property-decorator';

import { getComponentName, SpacerStructuralComponent } from '@kokiri/core/dist/spacer';

import { Box } from '../box';

@Component({
  name: getComponentName(),
  components: { Box },
})
export default class Spacer extends SpacerStructuralComponent {}
