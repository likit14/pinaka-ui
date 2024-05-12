import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

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
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
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
              background:#1977b7;
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
              border-bottom-: 1px solid #8ebf3f;
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
              <li class="breadcrumb-item"><a href="/">Home</a></li>
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
  
  );
}