import { Component } from 'vue-property-decorator';

import { getComponentName, AppStructuralComponent } from '@kokiri/core/dist/app';

import { Box } from '../box';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName(),
  components: { Box },
})
export default class App extends AppStructuralComponent {}
