import { VariantClassName, normalizeClassName } from 'petals-ui/dist/basic';
import { DialogShortcutOptions } from 'petals-ui/dist/dialog';

import { isArray, clone } from '../basic';
import { DialogShortcutType } from './typing';

let shownDialogShortcutType: DialogShortcutType = '' as any;
let shownDialogShortcutOptions: DialogShortcutOptions = {};
let shownDialogShortcutInstance: any = null;

function setCurrentDialogShortcutType(shortcut: DialogShortcutType): void {
  shownDialogShortcutType = shortcut;
}

function getCurrentDialogShortcutType(): DialogShortcutType {
  return shownDialogShortcutType;
}

function setCurrentDialogShortcutOptions(options: DialogShortcutOptions): void {
  shownDialogShortcutOptions = options;
}

function getCurrentDialogShortcutOptions(): DialogShortcutOptions {
  return clone(shownDialogShortcutOptions);
}

function setCurrentDialogShortcutInstance(inst: any): void {
  shownDialogShortcutInstance = inst;
}

function getCurrentDialogShortcutInstance(): any {
  return shownDialogShortcutInstance;
}

function resolveDialogShortcutClassNames(): string[] {
  const classNames: VariantClassName[] = ['Dialog', `Dialog--${getCurrentDialogShortcutType()}`];
  const { className } = getCurrentDialogShortcutOptions();

  if (className) {
    if (isArray(className)) {
      classNames.push(...(className as VariantClassName[]));
    } else {
      classNames.push(className as VariantClassName);
    }
  }

  return normalizeClassName(classNames).split(' ');
}

function resolveDialogShortcutContainerClassNames(): string[] {
  const containerClassNames = ['DialogShortcut'];
  const { centered } = getCurrentDialogShortcutOptions();

  if (centered) {
    containerClassNames.push('DialogShortcut--centered');
  }

  return containerClassNames;
}

export {
  setCurrentDialogShortcutType,
  getCurrentDialogShortcutType,
  setCurrentDialogShortcutOptions,
  getCurrentDialogShortcutOptions,
  setCurrentDialogShortcutInstance,
  getCurrentDialogShortcutInstance,
  resolveDialogShortcutClassNames,
  resolveDialogShortcutContainerClassNames,
};
