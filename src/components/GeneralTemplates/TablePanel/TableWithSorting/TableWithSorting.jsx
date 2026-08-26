import React from 'react'
import './TableWithSorting.scss';

const TableWithSorting = ({ data, columns }) => {
  // Handle undefined or null data
  const tableData = data || [];
  
  // If columns not provided, infer from first data item's keys
  const tableColumns = columns || (tableData.length > 0 ? Object.keys(tableData[0]).filter(key => key !== 'link') : []);
  
  // Function to render cell content based on field type
  const renderCellContent = (item, field) => {
    const value = item[field];
    
    // If field is 'title' and has a link, render as link
    if (field === 'title' && item.link) {
      return <a href={item.link} className="table-row-link">{value}</a>;
    }
    
    return value;
  };

  return (
    <table className="lab-table">
      <thead className='table-header'>
        <tr className='table-header-row'>
          {tableColumns.map((column, index) => (
            <th key={index} className='table-header-cell'>
              {typeof column === 'string' ? column : column.header}
            </th>
          ))}
        </tr>
    </thead>
      <tbody>
        {tableData.map((item, index) => (
          <tr key={index} className="table-row-simple">
            {tableColumns.map((column, colIndex) => (
              <td key={colIndex} className="table-row-cell-simple">
                {renderCellContent(item, typeof column === 'string' ? column : column.field)}
              </td>
            ))}
         </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableWithSorting