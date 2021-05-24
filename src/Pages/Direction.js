import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./PageHome/PageHome";
import VoucherList from "./PageVoucherList/PageVoucherList";
import Blog from "./PageVoucherform/PageVoucherform";
import NotFound from "./NotFound/NotFound";
import Details from "./PageDetails/Details";
import DoiTac from "./Doitac";
import QuanLiVoucher from "./QuanLiVoucher";
import PartnerPage from './HomePartner/PartnerPage';
import RegisterPage from './Register/Register'
import LoginPage from './Login/Login'
import ShowListVoucherPage from './PageShowListVoucher/PageShowListVoucher';

class Direction extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/voucherlist" component={VoucherList} />
          <Route path="/voucherform" component={Blog} />
          <Route path="/doitac" component={DoiTac} />
          <Route path="/voucher" component={QuanLiVoucher} />
          <Route path="/partner" component={PartnerPage} ></Route>  
          <Route path="/register" component={RegisterPage} /> 
          <Route path="/login" component={LoginPage} /> 
          <Route path="/showlistvoucher" component={ShowListVoucherPage} />
          {/* <Route component={NotFound} /> */}
          <Route path="/details/:id">
            <Details />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Direction;
