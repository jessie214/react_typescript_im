import React,{useEffect, useState} from "react";
import topIcon from './../../assets/images/signicon.png';
import Styles from './MobileSignIn.module.css';
import store from './../../redux/store';
// import { useSelector } from "../../redux/hooks";
// import {
//   savePatientActionCreator,
// } from "../../redux/patient/patientActions";
import patientData from '../../mockdata/patient.json';
const {useHistory} = require('react-router-dom');


export const MobileSignIn: React.FC = (props) => {  
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('123456');
  const [alertMessage, setAlertMessage] = useState('');
  const history = useHistory();
  
  useEffect(() => {
    store.dispatch({
      type: "save_patientList",
      payload:patientData,
    }) 
  },[])
// ​
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // 判断输入帐号和密码
    if (username === 'admin' && password === '123456') {
          // saveToken(account);
          history.push('/welcome')
      } else if(username === '' && password === ''){
        setAlertMessage('Please enter a user name! and your password');
      }else if(username ===''){
        setAlertMessage('Please enter a user name!');
      } else if(password ===''){
        setAlertMessage('Please enter your password!');
      }else {
        setAlertMessage('Invalid account or password!');
      }
  }
  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value) 
    setAlertMessage('')
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value) 
    setAlertMessage('')
  };


  return <div className={Styles.signInBox}>    
    <div className={Styles.signInContainer}><img src={topIcon} alt={'SignIn'} className={Styles.hearderImg} /></div>
    <h1>SignIn</h1> 
    <div className={Styles.signInForm}>
      <form onSubmit={handleSubmit}>
          <input type='text' placeholder='username' className={Styles.inputBox} onChange={handleUsername}/><br />
          <input type='password' placeholder='password' className={Styles.inputBox} onChange={handlePassword} /><br />
          <p className={Styles.messageBox}>{ alertMessage}</p>
          <button  className={Styles.buttonBox} type='submit'>SignIn</button>
      </form>
    </div>
    {/* <Link to={'./welcome'}><button>SignIn</button></Link> */}
  </div>
}
