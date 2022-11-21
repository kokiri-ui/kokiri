import { generateShortcutMethod } from 'petals-ui/dist/message';

import { Message as IvuMessage } from 'view-design';

const show = generateShortcutMethod(({ type, content, duration, onClose }) => {
  IvuMessage[type || 'info']({ content, duration, onClose });
});

export { show };
