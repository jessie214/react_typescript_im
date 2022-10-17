import React,{useEffect, useState} from "react";
import store from "../../redux/store";
import Styles from './PatientList.module.css';
import { PatientCard } from "../../components";
import { Header } from "../../components";


// import store from '../../redux/store';
const {useHistory} = require('react-router-dom');


export const PatientList: React.FC  = (props) => {  
  const history = useHistory();
  // console.log(language, 'dd')
  const [PatientListData, setPatientListData] = useState([]);
  // const [selectPatient,setSelectPatient] = useState<number>();
  
  useEffect(() => {
    // store.dispatch({
    //   type: "savePatientList",
    //   payload:patientData,
    // }) 
    const storeState = store.getState();
    console.log(storeState,'00000')
    setPatientListData(storeState.patientList);
    store.subscribe(() => {
      const storeState = store.getState();
      
      // setPatientListData(storeState.patientList);
      console.log(storeState,'storeState.patientList')
    })
  },[])
// ​
  const handleSelectPatient=(id:number)=>{
    history.push(`/patientdetail/${id}`)
}
  return (
    <div className={Styles.patientListContainer}>    
      {/* <div className={Styles.signInContainer}><img src={topIcon} alt={'SignIn'} className={Styles.hearderImg} /></div> */}
      <Header title={'Patient'} leftType={'logout'} rightType={'rightType'} />
      <div className={Styles.listBox}>
        {PatientListData.map((p: any) => (<PatientCard id={p.id} icon={p.icon} name={p.name} onShowPatientDetail={()=>{handleSelectPatient(p.id)}} />))}
      </div>
   </div>
  )
}
