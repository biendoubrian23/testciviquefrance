interface DataTableColumn<T> {
  key: keyof T | string;
  header: string;
  render?: (item: T) => React.ReactNode;
  className?: string;
}

interface DataTableProps<T> {
  columns: DataTableColumn<T>[];
  data: T[];
  keyExtractor: (item: T) => string;
  isLoading?: boolean;
  emptyMessage?: string;
}

export function DataTable<T>({ 
  columns, 
  data, 
  keyExtractor, 
  isLoading = false,
  emptyMessage = 'Aucune donnee disponible'
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
                <div className="h-4 bg-gray-200 w-24"></div>
                <div className="h-4 bg-gray-200 w-32"></div>
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
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="table-header">
              {columns.map((column) => (
                <th 
                  key={column.key.toString()} 
                  className={`px-6 py-3 ${column.className || ''}`}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={keyExtractor(item)} className="table-row">
                {columns.map((column) => (
                  <td 
                    key={column.key.toString()} 
                    className={`px-6 py-4 text-sm ${column.className || ''}`}
                  >
                    {column.render 
                      ? column.render(item) 
                      : String((item as Record<string, unknown>)[column.key as string] ?? '-')
                    }
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
