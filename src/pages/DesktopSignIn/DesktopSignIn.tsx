

import React, { useEffect, useState } from "react";
import topIcon from './../../assets/images/signicon.png';
import Styles from './DesktopSignIn.module.css';
import { useDispatch } from "react-redux";
// import { useSelector } from "../../redux/hooks";
// import {
//   savePatientActionCreator,
// } from "../../redux/patient/patientActions";
import patientData from '../../mockdata/patient.json';
import chatData from '../../mockdata/chat.json';
const { useHistory } = require('react-router-dom');
export const DesktopSignIn: React.FC = (props) =>  {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "save_patientList",
      payload: patientData,
    });
    dispatch({
      type: "save_chatlist",
      payload:chatData,
    })
  }, [dispatch])
  // ​
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();
    // 判断输入帐号和密码
    switch (true) {
      case username === 'test' && password === '123456':
          // saveToken(account);
          history.push('/desktopHome');
          sessionStorage.setItem('user', 'login');
          break;
      case username === '' && password === '':
          setAlertMessage('Please enter a user name! and your password');
          break;
      case username === '':
          setAlertMessage('Please enter a user name!');
          break;
      case password === '':
          setAlertMessage('Please enter your password!');
          break;
      default:
          setAlertMessage('Invalid account or password!');
          break;
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
        <input type='text' placeholder='username' className={Styles.inputBox} onChange={handleUsername} /><br />
        <input type='password' placeholder='password' className={Styles.inputBox} onChange={handlePassword} /><br />
        <p className={Styles.messageBox}>{alertMessage}</p>
        <button className={Styles.buttonBox} type='submit'>SignIn</button>
      </form>
    </div>
    <div className={Styles.testcode} ><p>username: test</p>   <p>password: 123456</p></div>
  </div>
}
