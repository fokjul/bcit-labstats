import './TableHeader.scss';

const TableHeader = ({ columns = ['Lab', 'Computer Station Availability'] }) => {
  return (
    <thead className='table-header'>
        <tr className='table-header-row'>
          {columns.map((column, index) => (
            <th key={index} className='table-header-cell'>{column}</th>
          ))}
        </tr>
    </thead>
  )
}

export default TableHeader