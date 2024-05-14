import React from "react";
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
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
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
import DashboardIcon from "@material-ui/icons/Dashboard";
import BarChartIcon from "@material-ui/icons/BarChart";
import Code from "@material-ui/icons/Code";
import { Flight, Help } from "@material-ui/icons";
import "@fontsource/open-sans"; // Defaults to weight 400
import "@fontsource/open-sans/400.css"; // Specify weight
import "@fontsource/open-sans/400-italic.css"; // Specify weight and style
import { Outlet, useNavigate } from "react-router-dom";


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
    padding: theme.spacing(-0),
    marginTop: "auto",
    // backgroundColor: "white",
    alignSelf: "flex-end",
  },
}));

export default function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const navigate=useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handelLogout=()=>{
    localStorage.clear()
    navigate('/')
    window.location.reload()
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
            Home
          </Typography>
          <IconButton color="inherit" onClick={handelLogout}>
              <Badge color="secondary">
                <PowerSettingsNewIcon />
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
          <ListItemLink href="/">
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
          <ListItemLink href="/centralcloud">
            <ListItemIcon>
              <CentralCloud />
            </ListItemIcon>
            <ListItemText primary="Central Cloud" />
          </ListItemLink>
          <ListItemLink href="/subcloud">
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
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Outlet/>
        </Container>
        <Copyright />
      </main>
    </div>
  );
}
