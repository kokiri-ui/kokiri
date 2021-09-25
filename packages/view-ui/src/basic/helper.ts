import { getComponentName as _getComponentName } from '@kokiri/core/dist/basic';

function getComponentName(moduleName: string): string {
  return _getComponentName(moduleName, 'PetalsViewUi');
}

export { getComponentName };
