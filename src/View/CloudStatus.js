import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
   
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: 'rgba(25,119,183,255)', // Change the color here
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  footer: {
    padding: theme.spacing(-10),
    marginTop: "auto",
    alignSelf: "flex-end",
  },
  
}));

function CloudStatus() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState("Option 1");
  const [hiMessage, setHiMessage] = useState("");
  const [showServiceTable, setShowServiceTable] = useState(false);
  const [showEventsTable, setShowEventsTable] = useState(false);
  const [showAlertsTable, setShowAlertsTable] = useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  function handleDropdownChange(event) {
    setSelectedOption(event.target.value);
    console.log("Selected option:", event.target.value);
    // You can perform any action based on the selected option here
  }
  function handleButtonClick(button) {
    if (button === 1) {
      setShowServiceTable(true);
      setShowEventsTable(false);
      setShowAlertsTable(false);
      setHiMessage([
        { controller: "Service 1", color: "Online" },
        { controller: "Service 2", color: "Online" },
        { controller: "Service 1", color: "Online" },
        { controller: "Service 1", color: "Online" },
        { controller: "Service 1", color: "Online" },
        { controller: "Service 1", color: "Online" },
        { controller: "Service 1", color: "Online" },
        { controller: "Service 1", color: "Online" },
        { controller: "Service 1", color: "Online" },
        { controller: "Service 1", color: "Online" },
        { controller: "Service 1", color: "Online" },
        { controller: "Service 1", color: "Online" },
        { controller: "Service 1", color: "Online" },
        { controller: "Service 1", color: "Online" },
        { controller: "Service 1", color: "Online" },
        { controller: "Service 1", color: "Online" },
        { controller: "Service 1", color: "Online" },
        { controller: "Service 1", color: "Online" },
        { controller: "Service 1", color: "Offline" },
        { controller: "Service 1", color: "Online" },
        // Add more data as needed
      ]);
    } else if (button === 2) {
      setShowServiceTable(false);
      setShowEventsTable(true);
      setShowAlertsTable(false);
      setHiMessage([
        { sno: 1, description: "Event 1", status: "Active" },
        { sno: 1, description: "Event 1", status: "Active" },
        { sno: 1, description: "Event 1", status: "Active" },
        { sno: 1, description: "Event 1", status: "Active" },
        { sno: 1, description: "Event 1", status: "Active" },
        { sno: 1, description: "Event 1", status: "Active" },
        { sno: 1, description: "Event 1", status: "Active" },
        { sno: 1, description: "Event 1", status: "Active" },
        { sno: 1, description: "Event 1", status: "Active" },
        { sno: 1, description: "Event 1", status: "Active" },
        { sno: 1, description: "Event 1", status: "Active" },
        { sno: 1, description: "Event 1", status: "Active" },
        { sno: 1, description: "Event 1", status: "Active" },
        { sno: 1, description: "Event 1", status: "Active" },
        { sno: 1, description: "Event 1", status: "Active" },
        { sno: 1, description: "Event 1", status: "Active" },
        { sno: 1, description: "Event 1", status: "Active" },
        { sno: 1, description: "Event 1", status: "Active" },
        { sno: 1, description: "Event 1", status: "Active" },
        { sno: 1, description: "Event 1", status: "Active" },
        { sno: 1, description: "Event 1", status: "Active" },
        { sno: 1, description: "Event 1", status: "Active" },
        { sno: 1, description: "Event 1", status: "Active" },
        { sno: 1, description: "Event 1", status: "Active" },
        { sno: 1, description: "Event 2", status: "Inactive" },
        { sno: 1, description: "Event 3", status: "Active" },
        // Add more data as needed
      ]);
    } else if (button === 3) {
      setShowServiceTable(false);
      setShowEventsTable(false);
      setShowAlertsTable(true);
      setHiMessage([
        { sno: 1, description: "Alert 1", status: "Online" },
        { sno: 1, description: "Alert 1", status: "Online" },
        { sno: 1, description: "Alert 1", status: "Online" },
        { sno: 1, description: "Alert 1", status: "Online" },
        { sno: 1, description: "Alert 1", status: "Online" },
        { sno: 1, description: "Alert 1", status: "Online" },
        { sno: 1, description: "Alert 1", status: "Online" },
        { sno: 1, description: "Alert 1", status: "Online" },
        { sno: 1, description: "Alert 1", status: "Online" },
        { sno: 1, description: "Alert 1", status: "Online" },
        { sno: 1, description: "Alert 1", status: "Online" },
        { sno: 1, description: "Alert 1", status: "Online" },
        { sno: 1, description: "Alert 1", status: "Online" },
        { sno: 1, description: "Alert 1", status: "Online" },
        { sno: 1, description: "Alert 1", status: "Online" },
        { sno: 1, description: "Alert 1", status: "Online" },
        { sno: 1, description: "Alert 1", status: "Online" },
        { sno: 1, description: "Alert 1", status: "Online" },
        { sno: 1, description: "Alert 1", status: "Online" },

        { sno: 2, description: "Alert 2", status: "Online" },
        { sno: 3, description: "Alert 3", status: "Offline" },
        // Add more data as needed
      ]);
    }
  }

  return (
    <>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy" crossorigin="anonymous"></link>
          <nav >
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Cloud Status</li>
            </ol>
          </nav>
          <select
            id="dropdown"
            style={{
              marginLeft:'100%',
              color:"white",
              width: "200px",
              height: "40px",
              fontSize: "16px",
              marginLeft: "45px",
              cursor: "pointer",
              backgroundColor: "#8ebf3f",
              marginTop: "30px",
              borderRadius: "5px",
              fontWeight: "bold",
              border:"white"
            }}
            value={selectedOption}
            onChange={handleDropdownChange}
          >
            <option value="Option 1">Region 1</option>
            <option value="Option 2">Region 2</option>
            <option value="Option 3">Region 3</option>
          </select>
          <div
            className="container"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginLeft: "20px",
              marginTop: "11px",
            }}
          >
            <button
              id="button1"
              style={{
                margin: "10px",
                padding: "10px",
                fontSize: "16px",
                justifyContent: "center",
                alignItems: "center",
                display: "block",
                width: "fit-content",
                backgroundColor: "#1977b7",
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
                width: "200px",
                borderRadius: "5px",
                fontWeight: "bold"
              }}
              onClick={() => handleButtonClick(1)}
              onFocus={(e) => e.target.style.backgroundColor = "#1e5dab"}
              onBlur={(e) => e.target.style.backgroundColor = "#3995f8"}
              // Additional CSS for focus state
              css={`  
                .highlighted {
                  background-color: #1e5dab;
                `}
            >
              Service status
            </button>
            <button
              id="button2"
              style={{
                margin: "10px",
                padding: "10px",
                fontSize: "16px",
                justifyContent: "center",
                alignItems: "center",
                display: "block",
                width: "fit-content",
                backgroundColor: "#1977b7",
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
                width: "200px",
                borderRadius: "5px",
                fontWeight: "bold"
              }}
              onClick={() => handleButtonClick(2)}
              onFocus={(e) => e.target.style.backgroundColor = "#1e5dab"}
              onBlur={(e) => e.target.style.backgroundColor = "#3995f8"}
              // Additional CSS for focus state
              css={`  
                .highlighted {
                  background-color: #1e5dab;
                `}
            >
              Events
            </button>
            <button
              id="button3"
              style={{
                margin: "10px",
                padding: "10px",
                fontSize: "16px", 
                justifyContent: "center",
                alignItems: "center",
                display: "block",
                width: "fit-content",
                backgroundColor: "#1977b7",
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
                width: "200px",
                borderRadius: "5px",
                fontFamily: "Open Sans, sans-serif",
                fontWeight: "bold"
              }}
              onClick={() => handleButtonClick(3)}
              onFocus={(e) => e.target.style.backgroundColor = "#1e5dab"}
              onBlur={(e) => e.target.style.backgroundColor = "#3995f8"}
              css={`// In your CSS file
              .tableHead {
              background-color: #3995f8;
              `}
            >
              Alerts
            </button>
          {/* Add margin below the button */}
          <div style={{ marginBottom: "40px" }}></div>
          </div>
          {showServiceTable && (
            <TableContainer component={Paper}>
              <Table>
                <TableHead className={classes.tableHead}>
                  <TableRow>
                    <TableCell style={{fontWeight: 'bold'}}>CONTROLLER</TableCell>
                    <TableCell style={{fontWeight: 'bold'}}>STATUS</TableCell>
                  </TableRow>
                </TableHead >
                <TableBody>
                  {hiMessage.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className={classes.controllerCell}>{item.controller}</TableCell>
                      <TableCell>{item.color}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
          {showEventsTable && (
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                  <TableCell style={{ fontWeight: 'bold' }}>S NO.</TableCell>
                    <TableCell style={{fontWeight: 'bold'}}>DESCRIPTION</TableCell>
                    <TableCell style={{fontWeight: 'bold'}}>STATUS</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {hiMessage.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.sno}</TableCell>
                      <TableCell>{item.description}</TableCell>
                      <TableCell>{item.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
          {showAlertsTable && (
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                  <TableCell style={{ fontWeight: 'bold' }}>S NO.</TableCell>
                    <TableCell style={{fontWeight: 'bold'}}>DESCRIPTION</TableCell>
                    <TableCell style={{fontWeight: 'bold'}}>STATUS</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {hiMessage.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.sno}</TableCell>
                      <TableCell>{item.description}</TableCell>
                      <TableCell>{item.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
    </>
  );
}

export default CloudStatus;
