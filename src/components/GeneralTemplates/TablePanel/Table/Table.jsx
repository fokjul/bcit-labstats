import './Table.scss';
import { useState } from "react";
import TableRow from '../TableRow/TableRow';
import TableHeader from '../TableHeader/TableHeader';

const Table = ({ data }) => {
  const [openRow, setOpenRow] = useState(null);

  const toggleRow = (index) => {
    setOpenRow(openRow === index ? null : index);
  };

  return (
    <table className="lab-table">
      <TableHeader />
      <tbody>
        {data.map((lab, index) => (
          <TableRow 
            key={lab.labName}
            data={lab}
            />
        ))}
      </tbody>
    </table>
  );
};

export default Table