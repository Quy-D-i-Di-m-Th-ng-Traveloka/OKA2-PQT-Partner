import React from "react";
import Footer from "../../Compoment/Footer";
import ShowListVoucher from "../../Compoment/ShowListVoucher";
import NavPartner1 from "../../Compoment/NavPartner1";

const PageShowListVoucher = (props) => {
  const { state } = props.location;

  return (
    <>
      <NavPartner1 id={state} />
      <ShowListVoucher partnerID={state} />
      <Footer />
    </>
  );
};

export default PageShowListVoucher;
