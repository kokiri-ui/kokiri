import { ButtonSize } from 'petals-ui/dist/button';
import { getComponentName as _getComponentName } from '@kokiri/core/dist/basic';

type ElSizeType = '' | 'medium' | 'small' | 'mini';

function getComponentName(moduleName: string): string {
  return _getComponentName(moduleName, 'PetalsElement');
}

function convertSize(size: ButtonSize): ElSizeType {
  return size === 'large' ? '' : size === 'small' ? size : 'medium';
}

export { getComponentName, convertSize };
