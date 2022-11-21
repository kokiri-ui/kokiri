export { generateAlert, generateConfirm } from 'petals-ui/dist/dialog';

export { DialogShortcutType } from './typing';
export {
  setCurrentDialogShortcutType,
  getCurrentDialogShortcutType,
  setCurrentDialogShortcutOptions,
  getCurrentDialogShortcutOptions,
  setCurrentDialogShortcutInstance,
  getCurrentDialogShortcutInstance,
  resolveDialogShortcutClassNames,
  resolveDialogShortcutContainerClassNames,
} from './helper';

export * from './Dialog';
