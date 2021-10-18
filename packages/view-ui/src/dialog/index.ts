import Vue from 'vue';
import { addClassNames } from '@kokiri/core/dist/basic';

import {
  getCurrentDialogShortcutType,
  getCurrentDialogShortcutOptions,
  setCurrentDialogShortcutInstance,
} from './helper';
import { alert, confirm } from './shortcut';
import Dialog from './Dialog.vue';

(Dialog as any).alert = alert;
(Dialog as any).confirm = confirm;

Vue.mixin({
  computed: {
    dialogEl(): Element | null {
      return this.$el && this.$el.querySelector ? this.$el.querySelector('.ivu-modal') : null;
    },
  },
  methods: {
    isDialogShortcutInstance(): boolean {
      return !!(this as any).dialogEl && !this.$parent;
    },
  },
  mounted(): void {
    if (this.isDialogShortcutInstance()) {
      setCurrentDialogShortcutInstance(this);

      this.$nextTick(() => {
        const el = (this as any).dialogEl;

        addClassNames(el, [
          'Dialog',
          `Dialog--${getCurrentDialogShortcutType()}`,
          getCurrentDialogShortcutOptions().className,
        ]);
        addClassNames(el.parentNode, ['DialogShortcut']);
      });
    }
  },
});

export { Dialog };
