import React from "react";
import Footer from "../../Compoment/Footer";
import VoucherForm from "../../Compoment/Multiple-Voucher/VoucherForm";
import NavPartner1 from "../../Compoment/NavPartner1";
const PageVoucherform = (props) => {
  const { state } = props.location;

  return (
    <>
      <NavPartner1 id={state} />
      <VoucherForm partnerID={state} />
      <Footer />
    </>
  );
};

export default PageVoucherform;
