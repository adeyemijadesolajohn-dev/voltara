import "./HistoryTable.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const HistoryTable = () => {
  const rows = [
    {
      id: 2025401,
      month: "April",
      date: 1,
      day: "Monday",
      year: 2025,
      usage: 250,
      remaining: 50,
      purchased: 300,
      status: "Active",
    },
    {
      id: 2025402,
      month: "April",
      date: 2,
      day: "Tuesday",
      year: 2025,
      usage: 150,
      remaining: 150,
      purchased: 300,
      status: "Active",
    },
    {
      id: 2025403,
      month: "April",
      date: 3,
      day: "Wednesday",
      year: 2025,
      usage: 50,
      remaining: 250,
      purchased: 300,
      status: "Active",
    },
    {
      id: 2025404,
      month: "April",
      date: 4,
      day: "Thursday",
      year: 2025,
      usage: 0,
      remaining: 300,
      purchased: 300,
      status: "Inactive",
    },
    {
      id: 2025405,
      month: "April",
      date: 5,
      day: "Friday",
      year: 2025,
      usage: 0,
      remaining: 300,
      purchased: 300,
      status: "Inactive",
    },
    {
      id: 2025406,
      month: "April",
      date: 6,
      day: "Saturday",
      year: 2025,
      usage: 200,
      remaining: 100,
      purchased: 300,
      status: "Active",
    },
    {
      id: 2025407,
      month: "April",
      date: 7,
      day: "Sunday",
      year: 2025,
      usage: 300,
      remaining: 0,
      purchased: 300,
      status: "Active",
    },
    {
      id: 2025408,
      month: "April",
      date: 8,
      day: "Monday",
      year: 2025,
      usage: 0,
      remaining: 300,
      purchased: 300,
      status: "Inactive",
    },
    {
      id: 2025409,
      month: "April",
      date: 9,
      day: "Tuesday",
      year: 2025,
      usage: 0,
      remaining: 300,
      purchased: 300,
      status: "Inactive",
    },
    {
      id: 2025410,
      month: "April",
      date: 10,
      day: "Wednesday",
      year: 2025,
      usage: 250,
      remaining: 50,
      purchased: 300,
      status: "Active",
    },
    {
      id: 2025411,
      month: "April",
      date: 11,
      day: "Thursday",
      year: 2025,
      usage: 100,
      remaining: 200,
      purchased: 300,
      status: "Active",
    },
    {
      id: 2025412,
      month: "April",
      date: 12,
      day: "Friday",
      year: 2025,
      usage: 200,
      remaining: 100,
      purchased: 300,
      status: "Active",
    },
    {
      id: 2025413,
      month: "April",
      date: 13,
      day: "Saturday",
      year: 2025,
      usage: 0,
      remaining: 300,
      purchased: 300,
      status: "Inactive",
    },
    {
      id: 2025414,
      month: "April",
      date: 14,
      day: "Sunday",
      year: 2025,
      usage: 150,
      remaining: 150,
      purchased: 300,
      status: "Active",
    },
    {
      id: 2025415,
      month: "April",
      date: 15,
      day: "Monday",
      year: 2025,
      usage: 0,
      remaining: 300,
      purchased: 300,
      status: "Inactive",
    },
    {
      id: 2025416,
      month: "April",
      date: 16,
      day: "Tuesday",
      year: 2025,
      usage: 100,
      remaining: 200,
      purchased: 300,
      status: "Active",
    },
    {
      id: 2025417,
      month: "April",
      date: 17,
      day: "Wednesday",
      year: 2025,
      usage: 300,
      remaining: 0,
      purchased: 300,
      status: "Active",
    },
    {
      id: 2025418,
      month: "April",
      date: 18,
      day: "Thursday",
      year: 2025,
      usage: 50,
      remaining: 250,
      purchased: 300,
      status: "Active",
    },
    {
      id: 2025419,
      month: "April",
      date: 19,
      day: "Friday",
      year: 2025,
      usage: 0,
      remaining: 300,
      purchased: 300,
      status: "Inactive",
    },
    {
      id: 2025420,
      month: "April",
      date: 20,
      day: "Saturday",
      year: 2025,
      usage: 300,
      remaining: 0,
      purchased: 300,
      status: "Active",
    },
    {
      id: 2025421,
      month: "April",
      date: 21,
      day: "Sunday",
      year: 2025,
      usage: 250,
      remaining: 50,
      purchased: 300,
      status: "Active",
    },
    {
      id: 2025422,
      month: "April",
      date: 22,
      day: "Monday",
      year: 2025,
      usage: 50,
      remaining: 250,
      purchased: 300,
      status: "Active",
    },
    {
      id: 2025423,
      month: "April",
      date: 23,
      day: "Tuesday",
      year: 2025,
      usage: 50,
      remaining: 250,
      purchased: 300,
      status: "Active",
    },
    {
      id: 2025424,
      month: "April",
      date: 24,
      day: "Wednesday",
      year: 2025,
      usage: 200,
      remaining: 100,
      purchased: 300,
      status: "Active",
    },
    {
      id: 2025425,
      month: "April",
      date: 25,
      day: "Thursday",
      year: 2025,
      usage: 150,
      remaining: 150,
      purchased: 300,
      status: "Active",
    },
    {
      id: 2025426,
      month: "April",
      date: 26,
      day: "Friday",
      year: 2025,
      usage: 0,
      remaining: 300,
      purchased: 300,
      status: "Inactive",
    },
    {
      id: 2025427,
      month: "April",
      date: 27,
      day: "Saturday",
      year: 2025,
      usage: 0,
      remaining: 300,
      purchased: 300,
      status: "Inactive",
    },
    {
      id: 2025428,
      month: "April",
      date: 28,
      day: "Sunday",
      year: 2025,
      usage: 0,
      remaining: 300,
      purchased: 300,
      status: "Inactive",
    },
    {
      id: 2025429,
      month: "April",
      date: 29,
      day: "Monday",
      year: 2025,
      usage: 0,
      remaining: 300,
      purchased: 300,
      status: "Inactive",
    },
    {
      id: 2025430,
      month: "April",
      date: 30,
      day: "Tuesday",
      year: 2025,
      usage: 250,
      remaining: 50,
      purchased: 300,
      status: "Active",
    },
  ];

  return (
    <div className="tableContainer">
      <TableContainer
        component={Paper}
        className="historyTable"
        style={{ borderRadius: "20px" }}
      >
        <Table
          sx={{ minWidth: 650 }}
          aria-label="simple table"
          className="tableWrapper"
          style={{ padding: "20px" }}
        >
          <TableHead style={{ backgroundColor: "#bdbdbd" }}>
            <TableRow>
              <TableCell
                className="tableCell"
                style={{
                  textAlign: "left",
                  borderInlineEnd: "2px solid white",
                  paddingLeft: "35px",
                }}
              >
                <span className="tableCellTitle">Usage ID</span>
              </TableCell>
              <TableCell
                className="tableCell"
                style={{
                  textAlign: "center",
                  borderInlineEnd: "2px solid white",
                }}
              >
                <span className="tableCellTitle">Month</span>
              </TableCell>
              <TableCell
                className="tableCell"
                style={{
                  textAlign: "center",
                  borderInlineEnd: "2px solid white",
                }}
              >
                <span className="tableCellTitle">Date</span>
              </TableCell>
              <TableCell
                className="tableCell"
                style={{
                  textAlign: "center",
                  borderInlineEnd: "2px solid white",
                }}
              >
                <span className="tableCellTitle">Energy Purchased</span>
              </TableCell>
              <TableCell
                className="tableCell"
                style={{
                  textAlign: "center",
                  borderInlineEnd: "2px solid white",
                }}
              >
                <span className="tableCellTitle">Energy Used</span>
              </TableCell>
              <TableCell
                className="tableCell"
                style={{
                  textAlign: "center",
                  borderInlineEnd: "2px solid white",
                }}
              >
                <span className="tableCellTitle">Energy Remaining</span>
              </TableCell>
              <TableCell
                className="tableCell"
                style={{ textAlign: "right", paddingRight: "35px" }}
              >
                <span className="tableCellTitle">Status</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell
                  className="tableCell"
                  style={{ textAlign: "left", paddingLeft: "35px" }}
                >
                  <span className="tableCellText">
                    <span style={{ fontWeight: "bold", color: "#003b6d" }}>
                      #
                    </span>
                    {row.id}
                  </span>
                </TableCell>
                <TableCell
                  className="tableCell"
                  style={{ textAlign: "center" }}
                >
                  <span className="tableCellText">{row.month}</span>
                </TableCell>
                <TableCell
                  className="tableCell"
                  style={{ textAlign: "center" }}
                >
                  <span className="tableCellText">
                    {row.day},{" "}
                    <span style={{ fontWeight: "bold", color: "#003b6d" }}>
                      {row.date}
                    </span>{" "}
                    {row.month},{" "}
                    <span style={{ fontWeight: "bold", color: "#003b6d" }}>
                      {row.year}
                    </span>
                  </span>
                </TableCell>
                <TableCell
                  className="tableCell"
                  style={{ textAlign: "center" }}
                >
                  <span className="tableCellText">
                    {row.purchased}
                    <span style={{ fontWeight: "bold", color: "#003b6d" }}>
                      kWh
                    </span>
                  </span>
                </TableCell>
                <TableCell
                  className="tableCell"
                  style={{ textAlign: "center" }}
                >
                  <span className="tableCellText">
                    {row.usage}
                    <span style={{ fontWeight: "bold", color: "#003b6d" }}>
                      kWh
                    </span>
                  </span>
                </TableCell>
                <TableCell
                  className="tableCell"
                  style={{ textAlign: "center" }}
                >
                  <span className="tableCellText">
                    {row.remaining}
                    <span style={{ fontWeight: "bold", color: "#003b6d" }}>
                      kWh
                    </span>
                  </span>
                </TableCell>
                <TableCell
                  className="tableCell"
                  style={{
                    textAlign: "right",
                    fontWeight: "bold",
                    paddingRight: "35px",
                  }}
                >
                  <span
                    className="tableCellText"
                    style={{
                      color: row.status === "Active" ? "green" : "red",
                    }}
                  >
                    {row.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default HistoryTable;
