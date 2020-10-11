import React from "react";
import { Route, Switch } from "react-router-dom";
import ParkingLots from "../pages/parkingLots/ParkingLots";
import ParkingLot from "../pages/parkingLot/ParkingLot";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <ParkingLots />
      </Route>
      <Route exact path="/detail/:id">
        <ParkingLot />
      </Route>
    </Switch>
  );
};

export default Routes;
