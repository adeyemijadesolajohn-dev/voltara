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
      id: 1,
      usageId: "10001",
      time: "10:00 AM",
      date: "01",
      day: "Monday",
      month: "January",
      year: "2025",
      transaction: "Payment",
      amount: 28500,
      voltage: 28500 / 25,
      update: "Paid",
    },
    {
      id: 2,
      usageId: "10002",
      time: "02:00 PM",
      date: "02",
      day: "Friday",
      month: "February",
      year: "2025",
      transaction: "Payment",
      amount: 17500,
      voltage: 17500 / 25,
      update: "Pending",
    },
    {
      id: 3,
      usageId: "10003",
      time: "05:00 PM",
      date: "21",
      day: "Friday",
      month: "February",
      year: "2025",
      transaction: "Payment",
      amount: 29500,
      voltage: 29500 / 25,
      update: "Paid",
    },
    {
      id: 4,
      usageId: "10004",
      time: "07:00 PM",
      date: "2",
      day: "Wednesday",
      month: "April",
      year: "2025",
      transaction: "Payment",
      amount: 6500,
      voltage: 6500 / 25,
      update: "Paid",
    },
    {
      id: 5,
      usageId: "10005",
      time: "09:00 AM",
      date: "11",
      day: "Sunday",
      month: "April",
      year: "2025",
      transaction: "Payment",
      amount: 15500,
      voltage: 15500 / 25,
      update: "Failed",
    },
    {
      id: 6,
      usageId: "10006",
      time: "10:00 AM",
      date: "06",
      day: "Monday",
      month: "June",
      year: "2025",
      transaction: "Payment",
      amount: 22500,
      voltage: 22500 / 25,
      update: "Paid",
    },
    {
      id: 7,
      usageId: "10007",
      time: "02:00 PM",
      date: "07",
      day: "Tuesday",
      month: "July",
      year: "2025",
      transaction: "Payment",
      amount: 28500,
      voltage: 28500 / 25,
      update: "Paid",
    },
    {
      id: 8,
      usageId: "10008",
      time: "05:00 PM",
      date: "16",
      day: "Thursday",
      month: "August",
      year: "2025",
      transaction: "Payment",
      amount: 45000,
      voltage: 45000 / 25,
      update: "Paid",
    },
    {
      id: 9,
      usageId: "10009",
      time: "07:00 AM",
      date: "09",
      day: "Friday",
      month: "September",
      year: "2025",
      transaction: "Payment",
      amount: 12500,
      voltage: 12500 / 25,
      update: "Pending",
    },
    {
      id: 10,
      usageId: "10010",
      time: "09:00 AM",
      date: "10",
      day: "Friday",
      month: "October",
      year: "2025",
      transaction: "Payment",
      amount: 30500,
      voltage: 30500 / 25,
      update: "Paid",
    },
    {
      id: 11,
      usageId: "10011",
      time: "10:00 AM",
      date: "11",
      day: "Monday",
      month: "November",
      year: "2025",
      transaction: "Payment",
      amount: 200000,
      voltage: 200000 / 25,
      update: "Paid",
    },
    {
      id: 12,
      usageId: "10012",
      time: "02:00 PM",
      date: "02",
      day: "Saturday",
      month: "December",
      year: "2025",
      transaction: "Payment",
      amount: 280500,
      voltage: 280500 / 25,
      update: "Pending",
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
                <span className="tableCellTitle">Date & Time</span>
              </TableCell>
              <TableCell
                className="tableCell"
                style={{
                  textAlign: "center",
                  borderInlineEnd: "2px solid white",
                }}
              >
                <span className="tableCellTitle">Transaction Type</span>
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
                <span className="tableCellTitle">Amount</span>
              </TableCell>
              <TableCell
                className="tableCell"
                style={{ textAlign: "right", paddingRight: "35px" }}
              >
                <span className="tableCellTitle">Status Update</span>
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
                    {row.usageId}
                  </span>
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
                    </span>{" "}
                    /{" "}
                    <span style={{ fontWeight: "bold", color: "#003b6d" }}>
                      {row.time}
                    </span>
                  </span>
                </TableCell>
                <TableCell
                  className="tableCell"
                  style={{ textAlign: "center" }}
                >
                  <span className="tableCellText">{row.transaction}</span>
                </TableCell>
                <TableCell
                  className="tableCell"
                  style={{ textAlign: "center" }}
                >
                  <span className="tableCellText">
                    {row.voltage}
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
                    <span style={{ fontWeight: "bold", color: "#003b6d" }}>
                      ₦
                    </span>{" "}
                    {row.amount}
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
                      color:
                        row.update === "Paid"
                          ? "green"
                          : row.update === "Pending"
                          ? "orange"
                          : "red",
                    }}
                  >
                    <span style={{ fontWeight: "bold" }}>●</span>
                    {row.update}
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
