
import React from 'react'
import './LoginBody.css'
import images from '../../images/importImages';
import PartnerLoginForm from '../../Compoment/Partner/PartnerLoginForm';
const LoginBody= () => {
    return (
        <div className="loginbody" style={{ backgroundImage: `url(${images.tera})` }}>
            <br></br>
        
            <div className="form1"></div>
            
            <div className="form2">
            <PartnerLoginForm/>
            </div>

            <div className="form3"></div>



        </div>
    )
}

export default LoginBody

