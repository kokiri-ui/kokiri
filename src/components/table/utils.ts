import { HorizontalAlignment, LooseSize } from '../../typing';
import { PaginationProps } from '../pagination/utils';

type FixedPosition = 'left' | 'right';

type PaginationPosition = 'top' | 'bottom' | 'both';

interface TableColumn {
  label?: string;
  align?: HorizontalAlignment;
  width?: LooseSize;
  className?: string;
  fixed?: boolean | FixedPosition;
  dataKey?: string;
}

interface TablePagination extends PaginationProps {
  position?: PaginationPosition;
}

type RowKeyGenerator = (record: { [key: string]: any }) => string;

export { RowKeyGenerator, FixedPosition, TableColumn, TablePagination };
