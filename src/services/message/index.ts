import { VNode } from 'vue';
import { CloseEventHandler, ElMessageOptions, ElMessageComponent } from 'element-ui/types/message';
import { Message as ElMessage } from 'element-ui';

import { MessageStatus } from '../../typing';
import { isNumber, isFunction, isPlainObject } from '../../helper/utils';

type MessageContent = string | VNode;

type MessageOption = {
  content: string | VNode;
  duration?: number;
  onClose?: CloseEventHandler;
};

interface MessageMethod {
  (content: MessageContent, duration: number, onClose?: CloseEventHandler): ElMessageComponent;
  (content: MessageContent, onClose?: CloseEventHandler): ElMessageComponent;
  (options: MessageOption): ElMessageComponent;
}

interface MessageService {
  info: MessageMethod;
  success: MessageMethod;
  warning: MessageMethod;
  error: MessageMethod;
}

const DEFAULT_DURATION = 3;

function resolveMessageOptions(opts: MessageOption): ElMessageOptions {
  const { content: message, duration, onClose } = opts;

  return {
    message,
    duration: (isNumber(duration) ? duration! : DEFAULT_DURATION) * 1000,
    onClose,
  };
}

function generateMessageMethod(type: MessageStatus): MessageMethod {
  return function(
    content: MessageContent | MessageOption,
    duration?: number | CloseEventHandler,
    onClose?: CloseEventHandler,
  ): ElMessageComponent {
    let opts: MessageOption;

    if (isPlainObject(content)) {
      opts = content as MessageOption;
    } else {
      let resolvedDuration = DEFAULT_DURATION;
      let resolvedOnClose = onClose;

      if (isFunction(duration)) {
        resolvedOnClose = duration! as CloseEventHandler;
      } else {
        resolvedDuration = duration! as number;
      }

      opts = {
        content: content as MessageContent,
        duration: resolvedDuration,
        onClose: resolvedOnClose,
      };
    }

    return ElMessage[type](resolveMessageOptions(opts));
  };
}

const Message: MessageService = {
  info: generateMessageMethod('info'),
  success: generateMessageMethod('success'),
  warning: generateMessageMethod('warning'),
  error: generateMessageMethod('error'),
};

export { Message };
