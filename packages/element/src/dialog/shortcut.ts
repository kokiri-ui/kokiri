import {
  DialogButtonProps,
  DialogShortcutCallback,
  DialogShortcutMethod,
} from 'petals-ui/dist/dialog';

import { isFunction, noop } from '@kokiri/core/dist/basic';
import { generateAlert, generateConfirm } from '@kokiri/core/dist/dialog';

import MessageBox from 'element-ui/lib/message-box';
import { ElMessageBoxShortcutMethod, ElMessageBoxOptions } from 'element-ui/types/message-box';

function generateShortcut(
  proxy: ElMessageBoxShortcutMethod,
  generator: (callback: DialogShortcutCallback) => DialogShortcutMethod,
): DialogShortcutMethod {
  return generator(({ type, title, content, affirmButton, denyButton, ...others }) => {
    const closable = !!others.closable;

    const options: ElMessageBoxOptions = {
      type,
      showClose: closable,
      closeOnClickModal: false,
      closeOnPressEscape: false,
      closeOnHashChange: true,
      dangerouslyUseHTMLString: true,
    };

    let confirmCallback = noop;
    let cancelCallback = noop;

    if (affirmButton) {
      const { text, className, handler } = affirmButton as DialogButtonProps;

      options.confirmButtonText = text;
      options.confirmButtonClass = className as string;

      if (isFunction(handler)) {
        confirmCallback = handler!;
      }
    }

    if (denyButton) {
      const { text, className, handler } = denyButton as DialogButtonProps;

      options.cancelButtonText = text;
      options.cancelButtonClass = className as string;

      if (isFunction(handler)) {
        cancelCallback = handler!;
      }
    }

    proxy(content!, title!, options).then(confirmCallback).catch(cancelCallback);
  });
}

const alert = generateShortcut(MessageBox.alert, generateAlert);
const confirm = generateShortcut(MessageBox.confirm, generateConfirm);

export { alert, confirm };
