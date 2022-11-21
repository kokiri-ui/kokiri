import { Vue, Component } from 'vue-property-decorator';

import { addClassNames, removeClassNames } from '@kokiri/core/dist/basic';
import {
  setCurrentDialogShortcutInstance,
  resolveDialogShortcutContainerClassNames,
} from '@kokiri/core/dist/dialog';

@Component
export default class DialogShortcutAdapter extends Vue {
  private latestContainerClassNames!: string[];

  private get dialogEl(): HTMLElement | null {
    return this.$el && this.$el.querySelector ? this.$el.querySelector('.el-message-box') : null;
  }

  private isDialogShortcutInstance(): boolean {
    return !!this.dialogEl && !this.$parent;
  }

  private updateClassNames(): void {
    if (this.isDialogShortcutInstance()) {
      setCurrentDialogShortcutInstance(this);

      this.$nextTick(() => {
        const el = this.dialogEl!.parentElement;

        if ((this as any).visible) {
          const containerClassNames = resolveDialogShortcutContainerClassNames();

          addClassNames(el, containerClassNames);

          this.latestContainerClassNames = containerClassNames;
        } else {
          removeClassNames(el, this.latestContainerClassNames || []);
        }
      });
    }
  }

  private mounted(): void {
    this.updateClassNames();
  }

  private updated(): void {
    this.updateClassNames();
  }
}
