import React, { useState } from 'react';
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import CloudIcon from "@material-ui/icons/Cloud";
import Fault from "@material-ui/icons/Announcement";
import Host from "@material-ui/icons/People"
import StorageCluster from "@material-ui/icons/Storage"
import CentralCloud from "@material-ui/icons/CloudCircle";
import Kubernetes from "@material-ui/icons/Widgets"
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Software from "@material-ui/icons/SettingsApplicationsRounded"
import ListItemText from "@material-ui/core/ListItemText";
import Migration from "@material-ui/icons/Flight"
import DashboardIcon from "@material-ui/icons/Dashboard";
import Service from "@material-ui/icons/Help"
import BarChartIcon from "@material-ui/icons/BarChart";
import Code from "@material-ui/icons/Code";
import { Flight, Help } from "@material-ui/icons";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function Copyright() {
  const classes = useStyles();
  return (
    <Container className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://pinakastra.com">
          <b>Turn-Key Cloud Platform for Academia, Research & Enterprises</b>
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Container>
  );
}

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
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Cloud Status
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItemLink href="/dashboard">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard"/>
          </ListItemLink>
          <ListItemLink href="/cloudstatus">
            <ListItemIcon>
              <CloudIcon />
            </ListItemIcon>
            <ListItemText primary="Cloud Status" />
          </ListItemLink>
          <ListItemLink href="/">
            <ListItemIcon>
              <CentralCloud />
            </ListItemIcon>
            <ListItemText primary="Central Cloud" />
          </ListItemLink>
          <ListItemLink href="/">
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Sub Clouds" />
          </ListItemLink>
          <ListItemLink href="/">
            <ListItemIcon>
              <Kubernetes />
            </ListItemIcon>
            <ListItemText primary="Kubernetes" />
          </ListItemLink>
          <ListItemLink href="/">
            <ListItemIcon>
              <StorageCluster />
            </ListItemIcon>
            <ListItemText primary="Storage Cluster" />
          </ListItemLink>
          <ListItemLink href="/">
            <ListItemIcon>
              <Code />
            </ListItemIcon>
            <ListItemText primary="Conifg Mgmt" />
          </ListItemLink>
          <ListItemLink href="/">
            <ListItemIcon>
              <Fault />
            </ListItemIcon>
            <ListItemText primary="Fault Mgmt" />
          </ListItemLink>
          <ListItemLink href="/">
            <ListItemIcon>
              <Host />
            </ListItemIcon>
            <ListItemText primary="Host Mgmt" />
          </ListItemLink>
          <ListItemLink href="/">
            <ListItemIcon>
              <Help />
            </ListItemIcon>
            <ListItemText primary="Service Mgmt" />
          </ListItemLink>
          <ListItemLink href="/">
            <ListItemIcon>
              <Software />
            </ListItemIcon>
            <ListItemText primary="Software Mgmt" />
          </ListItemLink>
          <ListItemLink href="/">
            <ListItemIcon>
              <Flight />
            </ListItemIcon>
            <ListItemText primary="Migration" />
          </ListItemLink>

        </List>
        <Divider />
        {/* Add your secondary list items here */}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy" crossorigin="anonymous"></link>
          <nav >
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="home">Home</a></li>
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
              backgroundColor: "#4169E1",
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
                backgroundColor: "#3995f8",
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
                width: "200px",
                borderRadius: "5px",
                fontWeight: "bold"
              }}
              onClick={() => handleButtonClick(1)}
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
                backgroundColor: "#3995f8",
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
                width: "200px",
                borderRadius: "5px",
                fontWeight: "bold"
              }}
              onClick={() => handleButtonClick(2)}
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
                backgroundColor: "#3995f8",
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
                width: "200px",
                borderRadius: "5px",
                fontFamily: "Open Sans, sans-serif",
                fontWeight: "bold"
              }}
              onClick={() => handleButtonClick(3)}
            >
              Alerts
            </button>
          </div>
          {showServiceTable && (
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.controllerCell}>CONTROLLER</TableCell>
                    <TableCell>STATUS</TableCell>
                  </TableRow>
                </TableHead>
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
                    <TableCell>S No.</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Status</TableCell>
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
                    <TableCell>S No.</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Status</TableCell>
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
        </Container>
        <Copyright />
      </main>
    </div>
  );
}

export default CloudStatus;