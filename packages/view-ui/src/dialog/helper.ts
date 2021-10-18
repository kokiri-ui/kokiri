import { DialogShortcutOptions } from 'petals-ui/dist/dialog';
import { clone } from '@kokiri/core/dist/basic';

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

export {
  setCurrentDialogShortcutType,
  getCurrentDialogShortcutType,
  setCurrentDialogShortcutOptions,
  getCurrentDialogShortcutOptions,
  setCurrentDialogShortcutInstance,
  getCurrentDialogShortcutInstance,
};
