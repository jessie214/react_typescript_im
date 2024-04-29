import React, { useEffect, useState } from "react";
import Styles from './DesktopHome.module.css';
import { useDispatch } from "react-redux";
import { PatientListForDesktop } from "../PatientList/PatientListForDesktop";
import { PatientDetail } from "../PatientDetail";
import { ChatDetail } from "../ChatDetail";
import patientData from '../../mockdata/patient.json';
import chatData from '../../mockdata/chat.json';
const { useHistory } = require('react-router-dom');
export const DesktopHome: React.FC = (props) =>  {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [patientId, setPatientId] = useState('');

  const history = useHistory();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch({
  //     type: "save_patientList",
  //     payload: patientData,
  //   });
  //   dispatch({
  //     type: "save_chatlist",
  //     payload:chatData,
  //   })
  // }, [dispatch])
  // ​

  const handleGetId = (id:string) => {
    setPatientId(id);
  }



  return <div className={Styles.DesktopHomebox}>
    {/* patientList */}
    <div className={Styles.leftbox}>
      <PatientListForDesktop onClickGetPatientId={(id:string)=>{handleGetId(id)} }/>
    </div>
    {/* chatDetai */}
    <div className={Styles.right}>
      {/* <PatientDetail/> */}
      {/* <ChatDetail/> */}
    </div>
     
  </div>
}
