import React from 'react';
// import logo from './logo.svg';
import styles from './App.module.css';

import { DesktopSignIn,MobileSignIn,WelcomPage,PatientList, NewPatient, PatientDetail,ChatList,ChatDetail,DesktopHome} from './pages';
const { BrowserRouter, Route, Switch, Redirect } = require('react-router-dom');


function  IsMobile (){
  let plat = navigator.userAgent.match(  
/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
  if (plat) return 'yse';
  return 'no';
}
let isMobile = IsMobile();

interface LayoutProps {
  component?: any;
  path: string;
  // isAuthenticated?: boolean;
}

// get Authenticated to sign in
const PrivateRoute: React.FC<LayoutProps> = ({ component, ...rest }) => {
  let isAuthenticated = sessionStorage.getItem('user') === 'login';
  const routeComponent = (props: any) => {
    return isAuthenticated ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: "/" }} />
    ); 
  }
  return <Route render={routeComponent} {...rest} />;
}

function App() {  
  return (    
    <div className={styles.App}>
      <BrowserRouter>   
      <Switch>
          <Route exact path="/"  render={(props:any) => isMobile==='yse'?<MobileSignIn {...props} />:<DesktopSignIn {...props} />} />
          <PrivateRoute
            path="/welcome"
            component={WelcomPage}
          />
          <Route path="/welcome" component={WelcomPage}/>
          <PrivateRoute
            path="/patientlist"
            component={PatientList}
          />
          {/* <Route path="/patientlist" component={PatientList} /> */}
          <PrivateRoute
            path="/newpatient"
            component={NewPatient}
          />
          <PrivateRoute
            path="/patientdetail/:patientId"
            component={PatientDetail}
          />
          <PrivateRoute
            path="/chatlist"
            component={ChatList}
          />
          <PrivateRoute
            path="/chatdetail/:patientId"
            component={ChatDetail}
          />
          <PrivateRoute
            path="/desktophome"
            component={DesktopHome}
          />
          <Route render={()=><h1>404 not found</h1>}/>
      </Switch>  
      </BrowserRouter>
    </div>   
    
  );

}

export default App;
