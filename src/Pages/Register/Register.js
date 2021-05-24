
import Footer from '../../Compoment/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import PartnerRegisterForm from '../../Compoment/Partner/PartnerRegisterForm';
import { React } from 'react'
import { Route, Switch } from 'react-router-dom';
import NavPartner from '../../Compoment/NavPartner';




function App() {    
 
  return (
    <>   
    <NavPartner/>
      <PartnerRegisterForm/>
      
      <Footer />
    </>
  );
}


export default App;
