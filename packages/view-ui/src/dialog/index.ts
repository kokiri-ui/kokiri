import Vue from 'vue';

import { alert, confirm } from './shortcut';
import DialogShortcutAdapter from './DialogShortcutAdapter';
import Dialog from './Dialog.vue';

(Dialog as any).alert = alert;
(Dialog as any).confirm = confirm;

Vue.mixin(DialogShortcutAdapter);

export { Dialog };
