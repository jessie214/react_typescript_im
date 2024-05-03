import React,{ useEffect, useState} from "react";
import Styles from './PatientList.module.css';
import { PatientCard } from "../../components";
import { Header } from "../../components";
import {Menu} from "../../components/Menu";
import { useSelector } from "../../redux/hooks";



const {useHistory} = require('react-router-dom');
// interface IList { id: string; name: string ,username:string,email:string,address:{},phone:string,icon:string}
// interface ILists extends Array<IList>{}


export const PatientList: React.FC = (props) => {  
  
  
  const history = useHistory();
  const [PatientListData, setPatientListData] = useState([]);
  const patientList = useSelector(state => state.patient.patientList);
  
  useEffect(() => {
    setPatientListData(patientList)
  },[])// eslint-disable-line
  

  // when click patient
  const handleSelectPatient=(id:number)=>{
    history.push(`/patientdetail/${id}`)
  }
  
  // search patient
  const handleSearchUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyWord = e.target.value;
    if (keyWord === '') {
      setPatientListData(patientList);
    } else {
      const newPatientList = patientList.slice();     
      const searchResult = newPatientList.filter((p: any) => p.name.toUpperCase().indexOf(keyWord.toUpperCase())>-1 || p.phone.includes(keyWord))
      setPatientListData(searchResult)
    }
  };

  // handles the exit
  const handleClickLeftIcon = () => {
    history.push(`/`)
  }

  // add user
  const handleClickRightIcon = () => {
    history.push('/newpatient')
  }

  return (
    <div className={Styles.patientListContainer}>    
      <Header
        title={'Patient'}
        type={'patientList'}
        onClickLeftIcon={() => { handleClickLeftIcon() }}
        onClickRightIcon={() => { handleClickRightIcon() }} />
      <div className={Styles.searchBox}>
        <form >
            <input type='text' placeholder='Name/Phone' className={Styles.inputBox} onChange={handleSearchUser}/><br />
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
      <Menu selected={'contact'} />
   </div>
  )
}
