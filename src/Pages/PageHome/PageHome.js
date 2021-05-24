import { React, useEffect, useState } from "react";
import NavChinh from "../../Compoment/NavBar";
import NavPhu from "../../Compoment/SubNavBar";
import Footer from "../../Compoment/Footer";
import Body from "../../Compoment/Body";
import Cards from "../../Compoment/Card";

function App() {
  const [cardVoucher, setCardVoucher] = useState([]);

  const getVoucher = () => {
    fetch("http://localhost:9000/voucher/cardlist").then(res=>res.json()).then(res=>setCardVoucher(res))
  };

  const renderCard = (voucher, index) => {
    var date = new Date(voucher.ngay_ket_thuc)
    console.log(voucher.hinh_anh)
    return (     
      <Cards    
        imgSource={voucher.hinh_anh}
        cardDesc={voucher.chu_thich_don_gian}
        expDate={date.toISOString().substring(0, 10)}
        index={index}
        id={voucher.id}
      />
    );
  };

  useEffect(() => {
    getVoucher();
  }, []);
  return (
    <>
      <NavChinh>
        <NavPhu />
      </NavChinh>
      <Body>{cardVoucher.map(renderCard)}</Body>
      <Footer />
    </>
  );
}

export default App;
