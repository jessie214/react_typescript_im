import React, { useEffect, useState } from "react";
import Styles from './DesktopHome.module.css';
import { PatientListForDesktop } from "../PatientList/PatientListForDesktop";
import { PatientDetailForDesktop } from "../PatientDetail";
import { ChatDetailForDesktop } from "../ChatDetail/";
import { useSelector } from "../../redux/hooks";
import { ConfirmDalogue } from "../../components";
import { useDispatch } from "react-redux";
import { NewPatientForDesktop } from "../NewPatient";
export const DesktopHome: React.FC = (props) => {

  const dispatch = useDispatch();
  const [patientId, setPatientId] = useState('');
  const patientList = useSelector(state => state.patient.patientList);
  const [isShowDalogue, setIsShowDalogue] = useState(false);  // when delete patient
  const [isShowAddDalogue, setIsShowAddDalogue] = useState(false); // when add patient

  // get first patient id
  useEffect(() => {
    setPatientId(patientList[0].id)
  }, [])
  
  useEffect(() => {
    console.log(isShowAddDalogue);
  }, [isShowAddDalogue])


  const handleGetId = (id:string) => {
    setPatientId(id);
  }

  // handle delete a patient
  const handleClickConfirm = () => {
    let newPatient = patientList.filter((p: any) => p.id !== Number(patientId));
    dispatch({
      type: "save_patientList",
      payload:[...newPatient]
    })
    setIsShowDalogue(false);   
    setPatientId(patientList[0].id)
  }

  const handleClickCancel = () => {
    setIsShowDalogue(false);
  }

  const handleSetIsShowDalogue = (newValue:boolean) => {
    setIsShowDalogue(newValue);
  }

  /*add new patient*/
  const handleAddPatient = (isAdd:boolean,newId?:string) => {
    setIsShowAddDalogue(isAdd);
    if (newId) {
      setPatientId(newId)
    }    
  }

  return <div className={Styles.DesktopHomebox}>
    {/* patientList */}
    <div className={Styles.leftbox}>
      <PatientListForDesktop
        onClickGetPatientId={(id: string) => { handleGetId(id) }}
        onClickAddPatient={(isAdd) => { handleAddPatient(isAdd,undefined) }}
      />
    </div>
    {/* chatDetai */}
    <div className={Styles.rightbox}>
      <PatientDetailForDesktop
        patientId={patientId}
        setIsShowDalogue={(newValue) => handleSetIsShowDalogue(newValue)}
      />
      <ChatDetailForDesktop patientId={patientId}/>
    </div>
    {/* delete ConfirmDalogue */}
    <ConfirmDalogue
        isShow={isShowDalogue}
        content={'Are you sure you want to delete this patient information?'}
        onClickConfirm={() => handleClickConfirm()}
        onClickCancel={() => handleClickCancel()}        
    />
    {/* add new patient */}
    <NewPatientForDesktop
      isShowAddDalogue={isShowAddDalogue}
      onClickAddPatient={(isAdd,newId) => { handleAddPatient(isAdd,newId) }}
    />
  </div>
}
