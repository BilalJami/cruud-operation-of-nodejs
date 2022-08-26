import React from "react";
import { useState,useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, firstName: "Jon",    lastName: "Snow", age: 35 },
  { id: 2, firstName: "Cersei", lastName: "Lannister", age: 42 },
  { id: 3, firstName: "Jaime",  lastName: "Lannister", age: 45 },
  { id: 4, firstName: "Arya",   lastName: "Stark", age: 16 },
  { id: 5, firstName: "Daenery",lastName: "Targaryen", age: null },
  { id: 6, firstName: null,     lastName: "Melisandre", age: 150 },
  { id: 7, firstName: "Ferrara",lastName: "Clifford", age: 44 },
  { id: 8, firstName: "Rossini",lastName: "Frances", age: 36 },
  { id: 9, firstName: "Harvey", lastName: "Roxie", age: 65 },
];

function StudentTable() {
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])

  console.log(tableData)
  return (
    <Box sx={{ height: 400, width: "100%", marginTop: "20px",border:"3px solid green" }}>
      <DataGrid
        rows={setTableData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
}

export default StudentTable;
