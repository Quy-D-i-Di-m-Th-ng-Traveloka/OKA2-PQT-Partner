import React from "react";
import NavChinh from "../../Compoment/NavBar";
import NavPhu from "../../Compoment/SubNavBar";
import Footer from "../../Compoment/Footer";
import VoucherForm from "../../Compoment/Multiple-Voucher/VoucherForm";
import NavPartner1 from "../../Compoment/NavPartner1"
class PageVoucherform extends React.Component {
  render() {
    return (
      <>
        <NavPartner1/>
        <VoucherForm />
        <Footer />
      </>
    );
  }
}

export default PageVoucherform;
