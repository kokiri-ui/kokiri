import { Component } from 'vue-property-decorator';

import { TabPaneStructuralComponent } from '@kokiri/core/dist/tabs';

import { getComponentName } from '../../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('tabPane'),
})
export default class TabPane extends TabPaneStructuralComponent {}
