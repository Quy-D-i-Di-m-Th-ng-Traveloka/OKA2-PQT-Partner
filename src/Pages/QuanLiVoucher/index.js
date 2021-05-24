import { React } from "react";
import NavChinh from "../../Compoment/NavBar";
import NavPhu from "../../Compoment/SubNavBar";
import Footer from "../../Compoment/Footer";
import ManageVoucher from "../../Compoment/QLVoucher";

function QuanLiVoucher() {
  return (
    <>
      <NavChinh>
        <NavPhu />
      </NavChinh>
      <ManageVoucher />
      <Footer />
    </>
  );
}

export default QuanLiVoucher;
