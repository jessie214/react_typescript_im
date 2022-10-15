import React from 'react';
// import logo from './logo.svg';
import styles from './App.module.css';

import { MobilePage } from './pages/MobilePage';
const {BrowserRouter,Route,} = require('react-router-dom');
// function  IsMobile (){
//   let plat = navigator.userAgent.match(  
// /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
//   );
//   if (plat) return 'yse';
//   return 'no';
// }
// let isMobile = IsMobile();


function App() {
  return (    
    <div className={styles.App}>
      <BrowserRouter>
      <Route exact path="/" component={MobilePage} />
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
