import "bootstrap/dist/css/bootstrap.min.css";
import { React,useEffect ,useState} from "react";
import "./App.css";
import Direction from "./Pages/Direction";
import VoucherType from "./Function/VoucherType";
import PartnerType from "./Function/PartnerType";
import PartnerRegisterForm from "./Compoment/Partner/PartnerRegisterForm";
import PartnerLoginForm from './Compoment/Partner/PartnerLoginForm'
import VoucherForm from "./Compoment/Voucher/VoucherForm";



function App() {

  return(
    <div>
      {/* Những code dưới đây chỉ dùng để test. Có thể xóa */ }
      {/* <VoucherType/> */}
      {/* <PartnerType/> */}
      {/* <PartnerRegisterForm/> */}
      {/* <PartnerLoginForm/> */}
      {/* <VoucherForm/> */}
      <Direction/>
    </div>
)
  
}

export default App;
