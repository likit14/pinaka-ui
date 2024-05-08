import React from "react";
import Home from "./Home"
// import { Component } from 'react';
// import 'simple-datatables/dist/datatables.css';
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";
import CloudIcon from "@material-ui/icons/Cloud";
import Fault from "@material-ui/icons/Announcement";
import Host from "@material-ui/icons/People"
import StorageCluster from "@material-ui/icons/Storage"
import CentralCloud from "@material-ui/icons/CloudCircle";
// import CloudSync from "@material-ui/icons/CloudSync";
import Kubernetes from "@material-ui/icons/Widgets"
import MenuIcon from "@material-ui/icons/Menu";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import NotificationsIcon from "@material-ui/icons/Notifications";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Software from "@material-ui/icons/SettingsApplicationsRounded"
import ListItemText from "@material-ui/core/ListItemText";
import Migration from "@material-ui/icons/Flight"
import DashboardIcon from "@material-ui/icons/Dashboard";
import Service from "@material-ui/icons/Help"
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import Code from "@material-ui/icons/Code";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Flight, Help } from "@material-ui/icons";


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
    // backgroundColor: "white",
    alignSelf: "flex-end",
  },

}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

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
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={0} color="secondary">
              {/* <NotificationsIcon /> */}
            </Badge>
          </IconButton>
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
            <ListItemText primary="Dashboard" />
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
          {/* Add your content here */}
          
          <html>
          <style>
            {`
            @import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700,300,100);
            body {
              font-family: "Roboto", helvetica, arial, sans-serif;
              font-size: 16px;
              font-weight: 400;
              text-rendering: optimizeLegibility;
            }
            
            
            /*** Table Styles **/
            .table-fill {
              background: white;
              border-radius:3px;
              padding:5px;
              width:40%;
              box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
              animation: float 5s infinite;
            }
             
            th {
              color:#D5DDE5;;
              background:#0d6efd;
              border-bottom:4px solid #9ea7af;
              border-right: 1px solid #343a45;
              font-size:16px;
              padding:8px;
              text-align:left;
              text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
              vertical-align:middle;
              fontWeight: "bold",
            }
            
            th:first-child {
              border-top-left-radius:3px;
            }
             
            th:last-child {
              border-top-right-radius:3px;
              border-right:none;
            }
              
            tr {
              border-top: 1px solid #C1C3D1;
              border-bottom-: 1px solid #C1C3D1;
              color:#666B85;
              font-size:16px;
              font-weight:normal;
              text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
            }
             
            tr:hover td {
              background:#4E5066;
              color:#FFFFFF;
              border-top: 1px solid #22262e;
            }
             
            tr:first-child {
              border-top:none;
            }
            
            tr:last-child {
              border-bottom:none;
            }
             
            tr:nth-child(odd) td {
              background:#EBEBEB;
            }
             
            tr:nth-child(odd):hover td {
              background:#4E5066;
            }
            
            tr:last-child td:first-child {
              border-bottom-left-radius:3px;
            }
             
            tr:last-child td:last-child {
              border-bottom-right-radius:3px;
            }
             
            td {
              background:#FFFFFF;
              padding:10px;
              text-align:left;
              vertical-align:middle;
              font-weight:500;
              font-size:18px;
              text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
              border-right: 1px solid #C1C3D1;
            }
            
            td:last-child {
              border-right: 0px;
            }
            
            th.text-left {
              text-align: left;
            }
            
            th.text-center {
              text-align: center;
            }
            
            th.text-right {
              text-align: right;
            }
            
            td.text-left {
              text-align: left;
            }
            
            td.text-center {
              text-align: center;
            }
            
            td.text-right {
              text-align: right;
            }

            div.table-title {
              color:black;
              display: block;
              margin: auto;
              max-width:250px;
              margin-left:18%;
           }
           .table-container {
            display: flex;
            flex-direction: row;
            gap: 40%;
        }
        .first-table {
          margin-top:48%;
          width: 150%;
        }
        
        /* Hide the scrollbar */
::-webkit-scrollbar {
    display: none;
}

/* Optional: Customizing scrollbar appearance */
/* You can adjust these styles to match your design */
::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: #888;
}

::-webkit-scrollbar-thumb:hover {
    background: #555;
}
html {
  scroll-behavior: smooth;
}
.text-center {
  text-align: center;
}
       `}
            
          </style>
          <body>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy" crossorigin="anonymous"></link>
          <nav >
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="home">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
            </ol>
          </nav>

        <div class="container">
        <div class="table-container">
            <div>
                <table class="table-fill first-table">
                    <thead>
                        <tr>
                            <th class="text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody class="table-hover">
                        <tr>
                            <td class="text-left">Success ✅</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col">
            <div class="table-title">
                {/* <h3>Host in Cloud</h3> */}
            </div>
                <table class="table-fill">
                    <thead>
                    <tr>
            <th colspan="3" class="text-center">Host in Cloud</th>
        </tr>
                        <tr>
                            <th class="text-left">Controller</th>
                            <th class="text-left">Computer</th>
                            <th class="text-left">Storage</th>
                        </tr>
                    </thead>
                    <tbody class="table-hover">
                        <tr>
                            <td class="text-left">2</td>
                            <td class="text-left">2</td>
                            <td class="text-left">2</td>
                        </tr>
                        <tr>
                            <td class="text-left">10</td>
                            <td class="text-left">14</td>
                            <td class="text-left">2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
          <div>
          <table class="table-fill" style={{marginTop:'29px'}}>
          <thead>
          <tr>
          <th class="text-left">Deployment Model</th>
          </tr>
          </thead>
          <tbody class="table-hover">
          <tr>
          <td class="text-left">Standard Controller + Storage</td>
          </tr>
          </tbody>
          </table>
          </div>

          <table class="table-fill" style={{marginTop:'28px'}}>
          <thead>
          <tr>
          <th class="text-left">Capacity</th>
          <th class="text-left">Cpu</th>
          <th class="text-left">Memory</th>
          <th class="text-left">Storage</th>
          </tr>
          </thead>
          <tbody class="table-hover">
          <tr>
          <td class="text-left">Used</td>
          <td class="text-left">4</td>
          <td class="text-left">4</td>
          <td class="text-left">16</td>
          </tr>
          <tr>
          <td class="text-left">Allocated</td>
          <td class="text-left">14</td>
          <td class="text-left">4</td>
          <td class="text-left">4</td>
          </tr>
          <tr>
          <td class="text-left">Total</td>
          <td class="text-left">18</td>
          <td class="text-left">8</td>
          <td class="text-left">20</td>
          </tr>
          </tbody>
          </table>
  </body>        
  </html>
        </Container>
        <Copyright />
      </main>
    </div>
  );
}