import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import NoteAltIcon from "@mui/icons-material/NoteAlt";
import "./Header.css";
function Header() {
  return (
    <>
      <div className="header">
        <div className="text-center">
          <h1 className="">Students Table</h1>
          <h4>9 Students Registered</h4>
        </div>
        <Box marginBottom={"10px"} border={"1px solid green"}>
          <Grid
            container
            rowSpacing={4}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item>
              <TextField
                id="outlined-basic"
                label="SEARCH FOR NAME"
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <Typography>
                <PersonOutlineIcon />
                125 STUDENTS
              </Typography>
            </Grid>
            <Grid item>
              {/* <Button variant="contained">
              <NoteAltIcon className="mr-3" />
                Enter New Data
            </Button> */}
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}

export default Header;
