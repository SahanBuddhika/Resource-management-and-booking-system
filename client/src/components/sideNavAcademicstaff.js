import React from "react";
import logo from "../assets/mdb-react.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from "mdbreact";
import { NavLink } from "react-router-dom";
import HallSelect from "./HallSelect/HallSelect";
import Calender from "./Calender/Calender";

const TopNavigation = () => {
  return (
    <div className="sidebar-fixed position-fixed">
      <a href="#!" className="logo-wrapper waves-effect">
        <img alt="MDB React Logo" className="img-fluid" src={logo} />
      </a>
      <MDBListGroup className="list-group-flush">
               
        

        <NavLink to="/EditNine" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="far fa-clock" className="mr-3" />
            Time Tables
          </MDBListGroupItem>
        </NavLink>

        {/* <NavLink to="/HallSelect" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="far fa-check-circle" className="mr-3" />
            Hall Booking
          </MDBListGroupItem>
        </NavLink> */}

        <NavLink to="/Hallregister" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="far fa-registered" className="mr-3" />
            Hall Register
          </MDBListGroupItem>
        </NavLink>

        <NavLink to="/HallList" activeClassName="activeClass">
          <MDBListGroupItem>
            <MDBIcon icon="fas fa-list-alt" className="mr-3" />
            Hall List
          </MDBListGroupItem>
        </NavLink>
      </MDBListGroup>

      

      
              
      


      
    </div>
  );
};

export default TopNavigation;
