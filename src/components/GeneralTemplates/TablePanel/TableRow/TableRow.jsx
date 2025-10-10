import './TableRow.scss'
import { check, stop, clock, arrowForwardBlue } from '../../../../assets/icons';
import StatusTag from '../../../Atoms/StatusTag/StatusTag';

const TableRow = ({data, index}) => {
console.log(data)
  return (
    <tr className="table-row">
        <td className="table-row-cell-simple">
          {data.labName}</td>
        <td className="table-row-cell-complex">
            <button>
              <StatusTag
                status={{
                  name: data.computersAvailable < data.computersTotal ? "Available" : "Not Available",
                  value: data.computersAvailable < data.computersTotal ? "available" : "unavailable"
                }}
                label={true}
              />
                <img src={arrowForwardBlue} alt="arrow icon" />
            </button>
            <tr className="table-row-cell-complex-expanded">
                <td>station number</td>
                <td>windows</td>
                <td>
                  <StatusTag 
                    status={{
                      name: data.computersAvailable < data.computersTotal ? "Available" : "Not Available",
                      value: data.computersAvailable < data.computersTotal ? "available" : "unavailable"
                    }}
                    
                  />
                </td>
            </tr>

        </td>
    </tr>
    /*
    <tr <tr
              className={`lab-row ${openRow === index ? "open" : ""}`}
              onClick={() => toggleRow(index)}
            >
              <td>{lab.labNumber}</td>
              <td className="availability-cell">
                <span
                  className={`status ${
                    lab.available > 0 ? "available" : "unavailable"
                  }`}
                >
                  {lab.available > 0
                    ? `🟢 ${lab.available} Available`
                    : "🔴 Not Available"}
                </span>
                <button
                  className="toggle-btn"
                  aria-expanded={openRow === index}
                  aria-controls={`details-${index}`}
                >
                  {openRow === index ? (
                    <arrowForwardBlue size={18} />
                  ) : (
                    <arrowForwardBlue size={18} />
                  )}
                </button>
              </td>
            </tr>

            EXPANDED STATION ROWS 
            {openRow === index && (
                <tr
                  id={`details-${index}`}
                  className="details-row"
                >
                  <td colSpan="2">
                    <table className="inner-table">
                      <tbody>
                        {lab.stations.map((station, i) => (
                          <tr key={i}>
                            <td>{station.name}</td>
                            <td>{station.os}</td>
                            <td>
                              {station.status === "available" && "🟢"}
                              {station.status === "in-use" && "🟠"}
                              {station.status === "offline" && "🔴"}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                </tr>
              )}
    */
  )
}

export default TableRow