import {
  DialogButtonProps,
  DialogShortcutCallback,
  DialogShortcutMethod,
} from 'petals-ui/dist/dialog';

import { isFunction, noop } from '@kokiri/core/dist/basic';
import { generateAlert, generateConfirm } from '@kokiri/core/dist/dialog';
import { Modal as IvuModal, ModalConfig } from 'view-design';

import { DialogShortcutType } from './typing';
import {
  setCurrentDialogShortcutType,
  setCurrentDialogShortcutOptions,
  getCurrentDialogShortcutInstance,
} from './helper';

function generateShortcut(
  shortcut: DialogShortcutType,
  generator: (callback: DialogShortcutCallback) => DialogShortcutMethod,
): DialogShortcutMethod {
  return generator(options => {
    const { type, title, content, affirmButton, denyButton, ...others } = options;

    setCurrentDialogShortcutType(shortcut);
    setCurrentDialogShortcutOptions(options);

    const resolved: ModalConfig = {
      title,
      content,
      closable: !!others.closable,
      loading: !!others.lazy,
      render: others.render,
    };

    if (affirmButton) {
      const { text, handler } = affirmButton as DialogButtonProps;
      const resolvedHandler = isFunction(handler) ? handler : noop;

      resolved.okText = text;
      resolved.onOk = isFunction(resolvedHandler)
        ? () => resolvedHandler!(getCurrentDialogShortcutInstance())
        : undefined;
    }

    if (denyButton) {
      const { text, handler } = denyButton as DialogButtonProps;
      const resolvedHandler = isFunction(handler) ? handler : noop;

      resolved.cancelText = text;
      resolved.onCancel = isFunction(resolvedHandler)
        ? () => resolvedHandler!(getCurrentDialogShortcutInstance())
        : undefined;
    }

    if (shortcut === 'alert') {
      IvuModal[type || 'info'](resolved);
    } else {
      (IvuModal as any).confirm(resolved);
    }
  });
}

const alert = generateShortcut('alert', generateAlert);
const confirm = generateShortcut('confirm', generateConfirm);

export { alert, confirm };
