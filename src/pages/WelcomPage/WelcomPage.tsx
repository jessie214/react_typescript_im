import React,{useEffect} from "react";
import welcomeIcon from './../../assets/images/welcomeIcon.png';
import Styles from './WelcomPage.module.css';

const {useHistory} = require('react-router-dom');

export const WelcomPage: React.FC = (props) => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push('/patientlist')
    },3000)
  },[history])

  return <div className={Styles.welcomContainer}>
    <div className={Styles.welcomIcon}><img src={welcomeIcon} alt={'welcome to IM'} className={Styles.welcomeImg} /></div>
    <h1>Welocom to IM!</h1> 
   
  </div>
}
