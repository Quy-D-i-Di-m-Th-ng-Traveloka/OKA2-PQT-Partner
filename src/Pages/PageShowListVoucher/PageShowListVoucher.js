import React from "react";
import NavChinh from "../../Compoment/NavBar";
import NavPhu from "../../Compoment/SubNavBar";
import Footer from "../../Compoment/Footer";
import ShowListVoucher from "../../Compoment/ShowListVoucher";
import NavPartner1 from "../../Compoment/NavPartner1";

class PageShowListVoucher extends React.Component {
  render() {
    return (
      <>
        <NavPartner1/>
        <ShowListVoucher />
        <Footer />
      </>
    );
  }
}

export default PageShowListVoucher;