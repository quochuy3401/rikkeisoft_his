import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css"
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Dashboard(){
  
  return (
    <div className="dashboard">
      <div className="header">
        <div className="menu">
          <label for="navbar" >
            <MenuIcon className="menu-icon" />
          </label>
        </div>
        <div className="name-hospital">
          <h1>Hospital</h1>
        </div>
        
        <div className="account-container">
          <AccountCircleIcon className="account-icon"/>
        </div>
      </div>
      <input className="menu-checkbox" type="checkbox" id="navbar" >
      </input>
      <label for="navbar" className="nav-overlay"></label>

      <div className="navbar">
        <ListItemButton className="nav-button">
          <ListItemIcon className="nav-icon">
            <AddToQueueIcon />
          </ListItemIcon>
          <ListItemText primary="Tiếp đón bệnh nhân" className="nav-text" />
        </ListItemButton>
        <ListItemButton className="nav-button">
          <ListItemIcon className="nav-icon">
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Quản lý khám bệnh" className="nav-text" />
        </ListItemButton>
      </div>

      <Outlet/>
    </div>

  )
}