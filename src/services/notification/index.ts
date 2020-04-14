import { VNode } from 'vue';
import { ElNotificationComponent, ElNotificationOptions } from 'element-ui/types/notification';
import { Notification as ElNotification } from 'element-ui';

import { MessageStatus, VerticalCornerPlacement } from '../../typing';
import { isNumber, isPlainObject } from '../../helper/utils';

type NotificationContent = string | VNode;

type NotificationOption = {
  title?: string;
  content?: NotificationContent;
  placement?: VerticalCornerPlacement;
  duration?: number;
};

interface NotificationMethod {
  (content: NotificationContent, title: string, options?: NotificationOption): ElNotificationComponent;
  (content: NotificationContent, options?: NotificationOption): ElNotificationComponent;
  (options: NotificationOption): ElNotificationComponent;
}

interface NotificationService {
  info: NotificationMethod;
  success: NotificationMethod;
  warning: NotificationMethod;
  error: NotificationMethod;
}

const DEFAULT_DURATION = 3;

function resolveNotificationOptions(opts: NotificationOption): ElNotificationOptions {
  const { title, content, placement, duration } = opts;

  return {
    title: title || '通知',
    message: content!,
    position: placement,
    duration: (isNumber(duration) ? duration! : DEFAULT_DURATION) * 1000,
  };
}

function generateNotification(type: MessageStatus): NotificationMethod {
  return function(
    content: NotificationContent | NotificationOption,
    title?: string | NotificationOption,
    options?: NotificationOption,
  ): ElNotificationComponent {
    let resolvedOptions: NotificationOption;

    if (isPlainObject(content)) {
      resolvedOptions = content as NotificationOption;
    } else {
      if (isPlainObject(title)) {
        resolvedOptions = title as NotificationOption;
      } else {
        resolvedOptions = {
          title: title as string,
          ...(options || ({} as NotificationOption)),
        };
      }

      resolvedOptions.content = resolvedOptions.content || (content as NotificationContent);
    }

    return ElNotification[type](resolveNotificationOptions(resolvedOptions));
  };
}

const Notification: NotificationService = {
  info: generateNotification('info'),
  success: generateNotification('success'),
  warning: generateNotification('warning'),
  error: generateNotification('error'),
};

export { Notification };
