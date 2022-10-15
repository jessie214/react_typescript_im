import React from 'react';
import logo from './logo.svg';
import './App.css';

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
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        { isMobile==='yse'?'mobile':'pc'}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>   
    
  );
}

export default App;
