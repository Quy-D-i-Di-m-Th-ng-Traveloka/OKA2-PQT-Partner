import React from "react";
import NavChinh from "../../Compoment/NavBar";
import NavPhu from "../../Compoment/SubNavBar";
import Footer from "../../Compoment/Footer";
import VoucherList from "../../Compoment/Voucher/VoucherList";

class PageVoucherList extends React.Component {
  render() {
    return (
      <>
        <NavChinh>
          <NavPhu />
        </NavChinh>
        <VoucherList />
        <Footer />
      </>
    );
  }
}

export default PageVoucherList;
