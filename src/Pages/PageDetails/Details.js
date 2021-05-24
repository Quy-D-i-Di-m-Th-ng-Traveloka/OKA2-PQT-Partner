import axios from 'axios';
import React, { useEffect ,useState} from 'react'
import {
    BrowserRouter as Router,
    useParams
  } from "react-router-dom";
import NavChinh from "../../Compoment/NavBar";
import NavPhu from "../../Compoment/SubNavBar";
import Footer from "../../Compoment/Footer";
import './Details.css'

const Details = () => {
    const {id} = useParams();
    var value = {
        "id":`${id}`
    }

    const initialDetail = {
        "hinh_anh":"",
        "chu_thich_day_du":"",
        "code_voucher":"",
        "ten":""
    }

    const[detail,setDetail]= useState(initialDetail);

    useEffect( async()=>{
        await axios.get("http://localhost:9000/voucher/voucherdetail",{params:value}).then(res=>setDetail(res.data))  
    },[])
    
    return (
        <>
        <NavChinh>
            <NavPhu />
        <div id='chiTiet'>
            <img id="pic" src={detail.hinh_anh} style={{width:'100%'}}/>
            <div>
                <h3>{detail.chu_thich_day_du}</h3>
            </div>

            <div id='voucher'>
                <h1>{detail.ten}</h1>
                <div id="codeVoucher">{detail.code_voucher}</div>
            </div>
        </div>




        </NavChinh>
        <Footer />
            
            
            
        </>
    )
}

export default Details
