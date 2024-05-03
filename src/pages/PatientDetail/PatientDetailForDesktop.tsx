import React, { useEffect, useState } from "react";
import Styles from './PatientDetailForDesktop.module.css';
import { useSelector } from "../../redux/hooks";


const { useHistory } = require('react-router-dom');

interface detailData {
  id: number;
  name: string,
  username: string,
  phone: string,
  gender: string,
  email: string,
  icon: string
}
interface PropsType {
  patientId: string,
  setIsShowDalogue:(value: boolean) => void;
 }

export const PatientDetailForDesktop: React.FC<PropsType> = ({
  patientId,
  setIsShowDalogue,
}) => {
  const history = useHistory();
  const patientList = useSelector(state => state.patient.patientList);


  const [detail, setDetail] = useState<detailData>(
    {
      id: 1, name: 'jessie',
      username: 'jessie',
      gender: 'female',
      phone: '02898987777',
      email: 'jessieyan214@gmail.com',
      icon: ''
    }
  );



  useEffect(() => {
    if (patientList && patientId != '') {
      let patientDetailData: detailData = patientList.filter((p: any) => p.id === Number(patientId))[0];
      setDetail(patientDetailData)
    }
  }, [patientList, patientId])


  // pop-up dialogue box before delete a patient
  const handleDelete = () => {
    setIsShowDalogue(true);
 
  }


  return (
    <div className={Styles.patientDetail}>
      <div className={Styles.detalBox}>
      <div className={Styles.iconBox}>
          <div className={Styles.iconBg}><img src={detail.icon} alt={'avatar'} className={Styles.rightIcon} /></div>
          <div className={Styles.title}>{detail.name}</div>
        </div>
        <div className={Styles.detailList}>        
          <div className={Styles.detailBox}>Email: <span>{detail.email}</span></div>
          <div className={Styles.detailBox}>Gender:  <span> {detail.gender}</span></div>
          <div className={Styles.detailBox}>Phone: <span>{detail.phone}</span></div>
          <button className={Styles.deleteButton} type='button' onClick={() => handleDelete()}>Delete</button>

        </div>
      </div>  
    </div>
  )
}
