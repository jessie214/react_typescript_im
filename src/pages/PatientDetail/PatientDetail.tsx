import React, { useEffect, useState } from "react";
import Styles from './PatientDetail.module.css';
import { useSelector } from "../../redux/hooks";
import { Header } from "../../components";
import { ConfirmDalogue } from "../../components";
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";

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

export const PatientDetail: React.FC = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const patientList = useSelector(state => state.patient.patientList);

  // get params in URL
  const { patientId } = useParams<{ patientId: string | undefined }>();

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

  const [isShowdDalogue, setIsShowdDalogue] = useState(false);

  // useEffect(() => {
  //   console.log(patientId,patientList)
  //   if (patientList && patientId !='') {
  //     let patientDetailData: detailData = patientList.filter((p: any) => p.id === Number(patientId))[0];
  //     setDetail(patientDetailData)
  //     console.log(patientDetailData, 'patientDetailData')
  //   }
  // }, [patientList, patientId])

  // handles the exit
  const handleClickLeftIcon = () => {
    history.go(-1)
  }

  // no right icon
  const handleClickRightIcon = () => {
    return false
  }

  // const renderDetailList = () => {
  // return  Object.keys(detail).forEach((key) => {
  //     console.log(key, detail[key as keyof detailData])
  //     return (
  //       <div className={Styles.detailBox}>
  //         <h3>{key}</h3>
  //         <span>{detail[key as keyof detailData]}</span>
  //       </div>
  //     )
  //   })
  // }

  // pop-up dialogue box before delete a patient
  const handleDelete = () => {
    setIsShowdDalogue(true);
 
  }

  const handleSentMessage = () => {
    history.push(`/chatdetail/${detail.id}`);
  }

  // handle delete a patient
  const handleClickConfirm = () => {
    let newPatient = patientList.filter((p: any) => p.id !== Number(patientId));
    dispatch({
      type: "save_patientList",
      payload:[...newPatient]
    })
    setIsShowdDalogue(false);
    history.push('/patientlist')
  }

  const handleClickCancel = () => {
    setIsShowdDalogue(false);
  }

  return (
    <div className={Styles.patientDetail}>
      <Header title={detail.name} type={'patientDetail'} onClickLeftIcon={() => { handleClickLeftIcon() }} onClickRightIcon={() => { handleClickRightIcon() }} />
      <div className={Styles.detalBox}>
        <div className={Styles.iconBox}>
          <div className={Styles.iconBg}><img src={detail.icon} alt={'avatar'} className={Styles.rightIcon} /></div>
          <button className={Styles.deleteButton} type='button' onClick={() => handleDelete()}>Delete</button>
        </div>
        {/* <div className={Styles.detailList}>{renderDetailList()}</div> */}
        <div className={Styles.detailList}>
          <div className={Styles.detailBox}>
            <h3>Email:</h3>
            <span>{detail.email}</span>
          </div>
          <div className={Styles.detailBox}>
            <h3>Gender:</h3>
            <span>{detail.gender}</span>
          </div>
          <div className={Styles.detailBox}>
            <h3>Phone:</h3>
            <span>{detail.phone}</span>
          </div>
          <button className={Styles.sentButton} type='button' onClick={() => handleSentMessage()}>Sent Message</button>
        </div>
      </div>
      <ConfirmDalogue
        isShow={isShowdDalogue}
        content={'Are you sure you want to delete this patient information?'}
        onClickConfirm={() => handleClickConfirm()}
        onClickCancel={() => handleClickCancel()} />
    </div>
  )
}
