import { Component } from 'vue-property-decorator';

import { MessageStructuralComponent } from '@kokiri/core/dist/message';

import { getComponentName } from '../basic';

@Component({
  // @ts-ignore
  abstract: true,
  name: getComponentName('message'),
})
export default class Message extends MessageStructuralComponent {
  private render(): null {
    return null;
  }
}
