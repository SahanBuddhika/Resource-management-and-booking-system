import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MDBCard, MDBCol, MDBRow, MDBView, MDBMask, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn, MDBIcon } from 'mdbreact';
import src1 from '../../assets/img-1.jpg';
//import Lecturer from '../Tables/Availabilitytable';
import TopNavNormalStudent from "../topNavNormalStudent";
import SideNavNormalStudent from "../sideNavNormalStudent";



const NormalStudent =  () => {
  return (
    <React.Fragment>
         <Router>
        <div className="flexible-content">
            <TopNavNormalStudent/>
            <SideNavNormalStudent/>
            

            <main id="content" className="p-5">
            
            </main>
        </div>
      </Router>
   
    </React.Fragment>
  );
}

export default NormalStudent;