import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GiftForm from "./PageVoucherform/PageVoucherform";
import PartnerPage from "./HomePartner/PartnerPage";
import LoginPage from "./Login/Login";
import ShowListVoucherPage from "./PageShowListVoucher/PageShowListVoucher";

class Direction extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={PartnerPage} />
          <Route path="/voucherform" component={GiftForm} />
          <Route path="/login" component={LoginPage} />
          <Route path="/showlistvoucher" component={ShowListVoucherPage} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Direction;
