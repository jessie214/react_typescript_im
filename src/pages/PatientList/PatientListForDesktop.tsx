import React,{ useEffect, useState} from "react";
import Styles from './PatientListForDesktop.module.css';
import { PatientCard } from "../../components";
import { Header } from "../../components";
import { useSelector } from "../../redux/hooks";
import logout from '../../assets/images/logout.svg';
import addUser from '../../assets/images/adduser.svg';


const {useHistory} = require('react-router-dom');

interface PropsType {
  onClickGetPatientId: (patientId: string) => void;
  onClickAddPatient: (value:boolean) => void;
}
export const PatientListForDesktop: React.FC<PropsType> = ({
  onClickGetPatientId,
  onClickAddPatient,
}) => {   
  const history = useHistory();
  const [PatientListData, setPatientListData] = useState([]);
  const patientList = useSelector(state => state.patient.patientList);
  
  useEffect(() => {
    setPatientListData(patientList)
  },[patientList])// eslint-disable-line
  

  // when click patient
  const handleSelectPatient = (id: any) => {
    onClickGetPatientId(id);
  }
  
  // search patient
  const handleSearchUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyWord = e.target.value;
    if (keyWord === '') {
      setPatientListData(patientList);
    } else {
      const newPatientList = patientList.slice();     
      const searchResult = newPatientList.filter((p: any) => p.name.toUpperCase().indexOf(keyWord.toUpperCase())>-1)
      setPatientListData(searchResult)
    }
  };

  // handles the exit
  const handleClickLeftIcon = () => {
    history.push(`/`)
  }

  // add user
  const handleClickRightIcon = () => {
    onClickAddPatient(true)
  }

  return (
    <div className={Styles.patientListContainer}>    
      <div className={Styles.header}>
        <div className={Styles.iconBox} onClick={() => handleClickLeftIcon()}><img src={logout} alt={'Log out'} className={Styles.leftIcon} /></div>
        <p className={Styles.title}>Patient</p>
        <div className={Styles.iconBox} onClick={() => handleClickRightIcon()}><img src={addUser} alt={'Log out'} className={Styles.rightIcon}/></div>
      </div> 
      <div className={Styles.searchBox}>
        <form >
            <input type='text' placeholder='search' className={Styles.inputBox} onChange={handleSearchUser}/><br />
        </form>
      </div>
      <div className={Styles.listBox}>
        {PatientListData.map((p: any) => (
          <PatientCard
            key={p.id}
            id={p.id}
            icon={p.icon}
            name={p.name}
            onShowPatientDetail={() => { handleSelectPatient(p.id) }} />))}
      </div>
   </div>
  )
}
