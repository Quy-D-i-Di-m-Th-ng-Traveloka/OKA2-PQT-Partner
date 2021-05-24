import { React } from "react";
import NavChinh from "../../Compoment/NavBar";
import NavPhu from "../../Compoment/SubNavBar";
import Footer from "../../Compoment/Footer";
import ManageDoiTac from "../../Compoment/QLDoiTac";

function DoiTac() {
  return (
    <>
      <NavChinh>
        <NavPhu />
      </NavChinh>
      <ManageDoiTac />
      <Footer />
    </>
  );
}

export default DoiTac;
