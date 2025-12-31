interface DataTableColumn<T> {
  key: keyof T | string;
  header: string;
  render?: (item: T) => React.ReactNode;
  className?: string;
  hideOnMobile?: boolean;
  truncate?: boolean;
  minWidth?: string;
}

interface DataTableProps<T> {
  columns: DataTableColumn<T>[];
  data: T[];
  keyExtractor: (item: T) => string;
  isLoading?: boolean;
  emptyMessage?: string;
  onRowClick?: (item: T) => void;
  rowClassName?: string;
}

export function DataTable<T>({
  columns,
  data,
  keyExtractor,
  isLoading = false,
  emptyMessage = 'Aucune donnee disponible',
  onRowClick,
  rowClassName,
}: DataTableProps<T>) {
  if (isLoading) {
    return (
      <div className="bg-white border border-gray-200">
        <div className="animate-pulse">
          <div className="h-12 bg-gray-100"></div>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-16 border-t border-gray-100">
              <div className="flex items-center gap-4 p-4">
                <div className="h-4 bg-gray-200 flex-1"></div>
                <div className="h-4 bg-gray-200 w-24 hidden sm:block"></div>
                <div className="h-4 bg-gray-200 w-32 hidden md:block"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="bg-white border border-gray-200 p-8 text-center">
        <p className="text-text-muted">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto scrollbar-thin">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="table-header">
              {columns.map((column) => (
                <th
                  key={column.key.toString()}
                  className={`
                    px-3 lg:px-6 py-3 whitespace-nowrap
                    ${column.hideOnMobile ? 'hidden md:table-cell' : ''}
                    ${column.minWidth ? `min-w-[${column.minWidth}]` : ''}
                    ${column.className || ''}
                  `}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={keyExtractor(item)}
                className={`table-row ${rowClassName || ''}`}
                onClick={onRowClick ? () => onRowClick(item) : undefined}
              >
                {columns.map((column) => (
                  <td
                    key={column.key.toString()}
                    className={`
                      px-3 lg:px-6 py-3 lg:py-4 text-sm
                      ${column.hideOnMobile ? 'hidden md:table-cell' : ''}
                      ${column.truncate ? 'max-w-[150px] lg:max-w-[200px]' : ''}
                      ${column.className || ''}
                    `}
                  >
                    <div className={column.truncate ? 'truncate' : ''}>
                      {column.render
                        ? column.render(item)
                        : String((item as Record<string, unknown>)[column.key as string] ?? '-')
                      }
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
