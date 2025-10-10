import './TableHeader.scss';

const TableHeader = () => {
  return (
    <thead className='table-header'>
        <tr className='table-header-row'>
          <th className='table-header-cell'>Lab</th>
          <th className='table-header-cell'>Computer Station Availability</th>
        </tr>
    </thead>
  )
}

export default TableHeader