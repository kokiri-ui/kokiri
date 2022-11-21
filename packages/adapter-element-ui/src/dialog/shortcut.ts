import {
  DialogButtonProps,
  DialogShortcutCallback,
  DialogShortcutMethod,
} from 'petals-ui/dist/dialog';

import { isFunction, noop } from '@kokiri/core/dist/basic';
import {
  DialogShortcutType,
  generateAlert,
  generateConfirm,
  setCurrentDialogShortcutType,
  setCurrentDialogShortcutOptions,
  resolveDialogShortcutClassNames,
} from '@kokiri/core/dist/dialog';

import MessageBox from 'element-ui/lib/message-box';
import { ElMessageBoxOptions } from 'element-ui/types/message-box';

function generateShortcut(
  shortcut: DialogShortcutType,
  generator: (callback: DialogShortcutCallback) => DialogShortcutMethod,
): DialogShortcutMethod {
  return generator(options => {
    setCurrentDialogShortcutType(shortcut);
    setCurrentDialogShortcutOptions(options);

    const { type, title, content, affirmButton, denyButton, ...others } = options;
    const closable = !!others.closable;

    const resolved: ElMessageBoxOptions = {
      type,
      showClose: closable,
      closeOnClickModal: false,
      closeOnPressEscape: false,
      closeOnHashChange: true,
      dangerouslyUseHTMLString: true,
      customClass: resolveDialogShortcutClassNames().join(' '),
    };

    let confirmCallback = noop;
    let cancelCallback = noop;

    if (affirmButton) {
      const { text, className, handler } = affirmButton as DialogButtonProps;

      resolved.confirmButtonText = text;
      resolved.confirmButtonClass = className as string;

      if (isFunction(handler)) {
        confirmCallback = handler!;
      }
    }

    if (denyButton) {
      const { text, className, handler } = denyButton as DialogButtonProps;

      resolved.cancelButtonText = text;
      resolved.cancelButtonClass = className as string;

      if (isFunction(handler)) {
        cancelCallback = handler!;
      }
    }

    MessageBox[shortcut](isFunction(others.render) ? others.render!() : content!, title!, resolved)
      .then(confirmCallback)
      .catch(cancelCallback);
  });
}

const alert = generateShortcut('alert', generateAlert);
const confirm = generateShortcut('confirm', generateConfirm);

export { alert, confirm };
