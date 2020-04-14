interface PaginationProps {
  total?: number;
  current?: number;
  pageSize?: number;
  pageSizeOptions?: number[];
  disabled?: boolean;
  hideOnSinglePage?: boolean;
  layout?: string;
}

const DEFAULT_PAGE_SIZE = 15;

const DEFAULT_PAGINATION_LAYOUT = 'total, prev, pager, next, sizes, jumper';

export { PaginationProps, DEFAULT_PAGE_SIZE, DEFAULT_PAGINATION_LAYOUT };
