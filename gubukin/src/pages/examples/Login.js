import React from "react";
import '../../styles/Login.css';


// core components
// import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
// import LandingPageHeader from "components/Headers/LandingPageHeader.js";
// import DefaultFooter from "components/Footers/DefaultFooter.js";

class Login extends React.Component {
  render(){

      return (
        <div className={'authBox'}>
            <div className={'leftBox'}>
                <div className={'bgGreen'} />
                <div className={'imageAuth'} />
                <div className={'imageText bold style1'}>Gubuk-In</div>
                <div className={'imageText style2'}>Bangun bisnis anda secara online</div>
            </div>
            <div className={'rightBox'}>
                <div className={'box'}>
                  <div className={'titleAuth'}>Login Gubuk-In</div>
                  <div className={'inputSBox'}>
                      <input className={'inputS'} type={'text'} placeholder={'Username'}  />
                  </div>

                   <div className={'inputSBox'}>
                      <input className={'inputS'} type={'password'} placeholder={'Password'}  />
                  </div>

                 

                  <div className={'btnAuth'}>Login</div>
                  

                </div>
            </div>
        </div>
      );
  }
}

export default Login;
