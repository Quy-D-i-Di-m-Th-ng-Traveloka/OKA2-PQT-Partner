
import Footer from '../../Compoment/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import PartnerRegisterForm from '../../Compoment/Partner/PartnerRegisterForm';
import { React } from 'react'
import { Route, Switch } from 'react-router-dom';
import NavPartner1 from '../../Compoment/NavPartner1';




function App() {    
 
  return (
    <>   
   <NavPartner1/>
      <PartnerRegisterForm/>
      
      <Footer />
    </>
  );
}


export default App;
