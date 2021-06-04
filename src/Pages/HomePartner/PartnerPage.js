import HomePartner from "../../Compoment/HomePartner";
import Footer from "../../Compoment/Footer";
import React from "react";
import NavPartner1 from "../../Compoment/NavPartner1";
const PartnerPage = (props) => {
  const { state } = props.location;

  return (
    <div>
      <NavPartner1 id={state} />
      <HomePartner />
      <Footer />
    </div>
  );
};

export default PartnerPage;
