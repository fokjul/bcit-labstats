import React from 'react'
import './TableWithSorting.scss';

const TableWithSorting = ({ data, columns }) => {
  // Handle undefined or null data
  const tableData = data || [];
  
  // If columns not provided, infer from first data item's keys (excluding 'link')
  const tableColumns = columns || (tableData.length > 0 ? Object.keys(tableData[0]).filter(key => key !== 'link') : []);
  
  // Function to render cell content based on field type
  const renderCellContent = (item, field) => {
    const value = item[field];
    
    // If field is 'title' and has a link, render as link
    if (field === 'title' && item.link) {
      return <a href={item.link} className="table-row-link">{value}</a>;
    }

    // Capitalize the first letter for display without changing the underlying data
    if (typeof value === 'string') {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }

    return value;
  };

  return (
    <table className="lab-table">
      <thead className='table-header'>
        <tr className='table-header-row'>
          {tableColumns.map((column, index) => (
            <th key={index} className='table-header-cell'>
              {typeof column === 'string' ? column.charAt(0).toUpperCase() + column.slice(1) : column.header}
            </th>
          ))}
        </tr>
    </thead>
      <tbody>
        {tableData.map((item, index) => (
          <tr key={index} className="table-row-simple">
            {tableColumns.map((column, colIndex) => {
              const field = typeof column === 'string' ? column : column.field;
              const label = typeof column === 'string' ? column.charAt(0).toUpperCase() + column.slice(1) : column.header;
              const isTitle = field === 'title';

              return (
                <td
                  key={colIndex}
                  className={isTitle ? 'table-row-cell-simple table-row-cell-title' : 'table-row-cell-simple'}
                  data-label={isTitle ? undefined : label}
                >
                  {renderCellContent(item, field)}
                </td>
              );
            })}
         </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableWithSorting