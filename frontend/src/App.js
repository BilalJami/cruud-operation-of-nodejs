import React from "react";
import Header from "./Header";
import StudentFilter from "./StudentFilter";
import StudentTable from "./StudentTable";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";
import './App.css'

function App() {
  return (
    <div className="container mt-5">
      <Header />
      <Divider />
      <Box>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={3}>
            <StudentFilter />
          </Grid>
          <Grid item xs={12} md={9}>
            <StudentTable />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
