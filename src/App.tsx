import React from 'react';
// import logo from './logo.svg';
import styles from './App.module.css';

import { DesktopSignIn,MobileSignIn,WelcomPage,PatientList } from './pages';
const {BrowserRouter,Route,Switch} = require('react-router-dom');
function  IsMobile (){
  let plat = navigator.userAgent.match(  
/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
  if (plat) return 'yse';
  return 'no';
}
let isMobile = IsMobile();


function App() {
  return (    
    <div className={styles.App}>
      <BrowserRouter>   
      <Switch>
          <Route exact path="/"  render={(props:any) => isMobile==='yse'?<MobileSignIn {...props} />:<DesktopSignIn {...props} />} />
          {/* {console.log(isMobile, 'isMobile')}
          <Route path="/" component={ isMobile==='yse'?{SignIn}:{SignInPage}} /> */}
          <Route path="/welcome" component={ WelcomPage} />
          <Route path="/patientlist" component={ PatientList} />
          <Route path="/patientdetail/:patientId" render={() => <h1>PatientDetail</h1>} />
          <Route path="/chatlist" render={() => <h1>ChatList</h1>} />
          <Route path="/chatdetail" render={() => <h1>ChatDetail</h1>} />
          <Route render={()=><h1>404 not found</h1>}/>
      </Switch>  
      </BrowserRouter>


      {/* <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        { isMobile==='yse'?'mobile':'pc'}
        <a
          className={styles.appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React CC
        </a>
      </header> */}
    </div>   
    
  );
}

export default App;
