import React, { useEffect,useState } from "react";
import Styles from './PatientDetail.module.css';
import { useSelector } from "../../redux/hooks";
import { Header } from "../../components";
import { useParams } from 'react-router-dom';
const {useHistory} = require('react-router-dom');

interface detailData {
  id: number;
  name: string,
  username: string,
  gender:string,
  email: string,
  icon: string
}

export const PatientDetail: React.FC = (props) => {    
  const history = useHistory();
  const patientList = useSelector(state => state.patient.patientList);
  // get params in URL
  const { patientId } = useParams<{ patientId: string | undefined }>();

  const [detail, setDetail] = useState<detailData>(
    {
    id: 1, name: 'jessie',
    username: 'jessie',
    gender:'female',
    email: 'jessieyan214@gmail.com',
    icon: ''
    }
  );

  useEffect(() => {
    if (patientList) {
      // let data = patientList.slice();
      let  patientDetailData:detailData = patientList.filter((p: any) => p.id === Number(patientId))[0];
      setDetail(patientDetailData)
      console.log(patientDetailData,'patientDetailData')
    }    
  }, [patientList,patientId])

// handles the exit
const handleClickLeftIcon = () => {
  history.go(-1)
}

// no right icon
const handleClickRightIcon = () => {
  return false
}

  return (
    <div className={Styles.patientDetail}>
      <Header title={detail.name} type={'patientDetail'} onClickLeftIcon={()=>{handleClickLeftIcon()}} onClickRightIcon={()=>{handleClickRightIcon()}}/>
      <div className={Styles.detalBox}>

      </div>
 
   </div>
  )
}
