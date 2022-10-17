import React from "react";
import Styles from './PatientCard.module.css';


interface PropsType {
  id: number;
  icon: string;
  name: string;
  onShowPatientDetail: () => void;
}
export const PatientCard: React.FC<PropsType> = ({
  id,
  name,
  icon,
  onShowPatientDetail
}) => {
  return <div key={id} className={Styles.card} onClick={()=>onShowPatientDetail()}>
  <div className={Styles.imgBox}><img src={icon} alt={name} className={Styles.icon} /><p className={Styles.name}> {name}</p></div>    
 </div>
}
