import {
  DialogButtonProps,
  DialogShortcutCallback,
  DialogShortcutMethod,
} from 'petals-ui/dist/dialog';

import { isFunction, noop } from '@kokiri/core/dist/basic';
import { generateAlert, generateConfirm } from '@kokiri/core/dist/dialog';
import { Modal as IvuModal, ModalConfig } from 'view-design';

function generateShortcut(
  shortcut: 'alert' | 'confirm',
  generator: (callback: DialogShortcutCallback) => DialogShortcutMethod,
): DialogShortcutMethod {
  return generator(({ type, title, content, affirmButton, denyButton, ...others }) => {
    const options: ModalConfig = { title, content, closable: !!others.closable };

    if (affirmButton) {
      const { text, handler } = affirmButton as DialogButtonProps;

      options.okText = text;
      options.onOk = isFunction(handler) ? handler : noop;
    }

    if (denyButton) {
      const { text, handler } = denyButton as DialogButtonProps;

      options.cancelText = text;
      options.onCancel = isFunction(handler) ? handler : noop;
    }

    if (shortcut === 'alert') {
      IvuModal[type || 'info'](options);
    } else {
      (IvuModal as any).confirm(options);
    }
  });
}

const alert = generateShortcut('alert', generateAlert);
const confirm = generateShortcut('confirm', generateConfirm);

export { alert, confirm };
