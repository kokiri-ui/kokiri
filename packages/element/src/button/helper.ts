import { ButtonSize } from 'petals-ui/dist/button';

type ElSizeType = '' | 'medium' | 'small' | 'mini';

function convertSize(size: ButtonSize): ElSizeType {
  return size === 'large' ? '' : size === 'small' ? size : 'medium';
}

export { convertSize };
