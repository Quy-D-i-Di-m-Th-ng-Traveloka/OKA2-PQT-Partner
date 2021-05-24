
import Footer from '../../Compoment/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import { React } from 'react'
import { Route, Switch } from 'react-router-dom';
import NavPartner1 from '../../Compoment/NavPartner1';
import PartnerLoginForm from '../../Compoment/Partner/PartnerLoginForm';
import PartnerRegisterForm from '../../Compoment/Partner/PartnerRegisterForm';
import LoginBody from '../../Compoment/LoginBody'

function App() {    
 
    return (
      <>   
      <NavPartner1/>
      
      <LoginBody/>
        
        <Footer/>
        
      </>
    );
  }
  
  
  export default App;
  


