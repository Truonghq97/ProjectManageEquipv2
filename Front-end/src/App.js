import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/login/Login";

import listEmployee from "./components/listEmployee";
import Add from "./components/add/addUser";
import InforUser from "./components/infor/InforUser";
import EditUser from "./components/edit/EditUser";

import ListEquipment from "./components/listEquipment";
import AddEquip from "./components/add/AddEquip";
import InforEquip from "./components/infor/InforEqip";
import EditEquip from "./components/edit/EditEquip";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/list-employee" component={listEmployee} />
        <Route exact path="/add-user" component={Add} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/list-employee/:id" component={InforUser} />
        <Route exact path="/list-employee/:id/edit" component={EditUser} />

        <Route exact path="/list-equipment" component={ListEquipment} />
        <Route exact path="/add-equip" component={AddEquip} />
        <Route exact path="/list-equipment/:id" component={InforEquip} />
        <Route exact path="/list-equipment/:id/edit" component={EditEquip} />
      </div>
    </Router>
  );
}

export default App;
