import { alert, confirm } from './shortcut';
import Dialog from './Dialog.vue';

(Dialog as any).alert = alert;
(Dialog as any).confirm = confirm;

export { Dialog };
