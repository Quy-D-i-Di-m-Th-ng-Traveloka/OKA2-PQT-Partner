import Footer from "../../Compoment/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { React, useState, useEffect } from "react";
import NavPartner1 from "../../Compoment/NavPartner1";
import LoginBody from "../../Compoment/LoginBody";
import images from "../../images/importImages";
import PartnerLoginForm from "../../Compoment/Partner/PartnerLoginForm";

function App() {
  const [dataID, setDataID] = useState();

  const handleCallback = (data) => {
    setDataID(data);
  };

  // useEffect(() => {
  //   console.log(id);
  // }, [id]);

  useEffect(() => {
    console.log(dataID);
  }, [dataID]);
  return (
    <>
      <NavPartner1 id={dataID} />
      <div
        className="loginbody"
        style={{ backgroundImage: `url(${images.tera})` }}
      >
        <br></br>

        <div className="form2">
          <PartnerLoginForm parentCallBack={handleCallback} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
