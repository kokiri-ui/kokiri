import { generateShortcutMethod } from 'petals-ui/dist/message';

import ElMessage from 'element-ui/lib/message';

const show = generateShortcutMethod(({ type, content, duration, onClose }) => {
  ElMessage[type || 'info']({
    message: content,
    duration: duration !== undefined ? duration * 1000 : undefined,
    onClose,
  });
});

export { show };
