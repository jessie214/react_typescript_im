import React,{useEffect} from "react";
import Styles from './WelcomPage.module.css';
const {useHistory} = require('react-router-dom');

export const WelcomPage: React.FC = (props) => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push('/')
    },3000)
  },[history])

  return <div className={Styles.signInBox}>
    <h1>welcom333</h1> 
   
  </div>
}
