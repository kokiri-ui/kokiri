import { ButtonSize } from 'petals-ui/dist/button';
import { getComponentName as _getComponentName } from '@kokiri/core/dist/basic';

type ElSizeType = '' | 'medium' | 'small' | 'mini';

function getComponentName(moduleName: string): string {
  return _getComponentName(moduleName, 'KokiriElementUi');
}

function convertSize(size: ButtonSize): ElSizeType {
  return size === 'large' ? '' : size === 'small' ? size : 'medium';
}

function convertPlacement(placement: string): string {
  const parts = placement.split('-');

  if (parts.length === 1) {
    return placement;
  }

  return parts[0] === 'top' || parts[0] === 'bottom'
    ? `${parts[0]}-${parts[1] === 'left' ? 'start' : 'end'}`
    : `${parts[0]}-${parts[1] === 'top' ? 'start' : 'end'}`;
}

export { getComponentName, convertSize, convertPlacement };
