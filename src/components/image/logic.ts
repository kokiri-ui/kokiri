import { Component } from 'vue-property-decorator';

import { ComponentStyle } from 'petals-ui/dist/basic';
import { getComponentName, ImageStructuralComponent } from '@kokiri/core/dist/image';

type ImageComponentEventListeners = Record<string, Function | Function[]>; // eslint-disable-line @typescript-eslint/ban-types

@Component({
  name: getComponentName(),
})
export default class Image extends ImageStructuralComponent {
  private get computedStyle(): ComponentStyle {
    const hc = this.getHeadlessComponent()!;

    const width: string = hc.getWidth();
    const height: string = hc.getHeight();

    const style: ComponentStyle = {};

    if (width) {
      style.width = width;
    }

    if (height) {
      style.height = height;
    }

    return style;
  }

  private get filteredListeners(): ImageComponentEventListeners {
    const oldListeners: ImageComponentEventListeners = this.$listeners;
    const listeners: ImageComponentEventListeners = {};

    Object.keys(oldListeners).forEach(eventName => {
      if (eventName !== 'load' && eventName !== 'error') {
        listeners[eventName] = oldListeners[eventName];
      }
    });

    return listeners;
  }

  private get showSubstitute(): boolean {
    return this.getHeadlessComponent()!.needFit();
  }
}
