import { ElMessageBoxOptions, MessageBoxData } from 'element-ui/types/message-box';
import { MessageBox as ElMessageBox } from 'element-ui';

import { MessageStatus } from '../../typing';
import { isPlainObject } from '../../helper/utils';

type MessageBoxType = 'alert' | 'confirm' | 'prompt';
type MessageBoxContent = string;

type MessageBoxOption = {
  title?: string;
  type?: MessageStatus;
  icon?: string;
  okText?: string;
  cancelText?: string;
};

interface MessageBoxMethod {
  (content: MessageBoxContent, title: string, options?: MessageBoxOption): Promise<MessageBoxData>;
  (content: MessageBoxContent, options?: MessageBoxOption): Promise<MessageBoxData>;
}

interface MessageBoxService {
  alert: MessageBoxMethod;
  confirm: MessageBoxMethod;
  prompt: MessageBoxMethod;
}

function resolveMessageBoxOptions(opts: MessageBoxOption): ElMessageBoxOptions {
  const { title, type, icon, okText, cancelText } = opts;

  return {
    title: title || '提示',
    type,
    iconClass: icon,
    confirmButtonText: okText,
    cancelButtonText: cancelText,
  };
}

function generateMessageBoxMethod(type: MessageBoxType): MessageBoxMethod {
  return function(
    content: MessageBoxContent,
    title?: string | MessageBoxOption,
    options?: MessageBoxOption,
  ): Promise<MessageBoxData> {
    let resolvedOptions: MessageBoxOption;

    if (isPlainObject(title)) {
      resolvedOptions = title as MessageBoxOption;
    } else {
      resolvedOptions = {
        title: title as string,
        ...(options || ({} as MessageBoxOption)),
      };
    }

    return ElMessageBox[type](content, resolveMessageBoxOptions(resolvedOptions));
  };
}

const MessageBox: MessageBoxService = {
  alert: generateMessageBoxMethod('alert'),
  confirm: generateMessageBoxMethod('confirm'),
  prompt: generateMessageBoxMethod('prompt'),
};

export { MessageBox };
