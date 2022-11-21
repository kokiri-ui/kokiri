import { Vue, Component } from 'vue-property-decorator';

import { addClassNames } from '@kokiri/core/dist/basic';
import {
  setCurrentDialogShortcutInstance,
  resolveDialogShortcutClassNames,
  resolveDialogShortcutContainerClassNames,
} from '@kokiri/core/dist/dialog';

@Component
export default class DialogShortcutAdapter extends Vue {
  private get dialogEl(): HTMLElement | null {
    return this.$el && this.$el.querySelector ? this.$el.querySelector('.ivu-modal') : null;
  }

  private isDialogShortcutInstance(): boolean {
    return !!this.dialogEl && !this.$parent;
  }

  private mounted(): void {
    if (this.isDialogShortcutInstance()) {
      setCurrentDialogShortcutInstance(this);

      this.$nextTick(() => {
        const el = this.dialogEl;

        addClassNames(el, resolveDialogShortcutClassNames());
        addClassNames(el!.parentElement, resolveDialogShortcutContainerClassNames());
      });
    }
  }
}
