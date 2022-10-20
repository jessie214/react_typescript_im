import React, { useEffect, useState } from "react";
import Styles from './ChatDetail.module.css';
import { useSelector } from "../../redux/hooks";
import { Header } from "../../components";
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import avatar from '../../mockdata/avatar.json';
import sent from '../../assets/images/sent.svg';

const { useHistory } = require('react-router-dom');

interface chatDetailData {
  id: number,
  content: string,
  time: string,
  icon: string
}

interface patientDetailData {
  id: number;
  name: string,
  username: string,
  phone: string,
  gender: string,
  email: string,
  icon: string
}

export const ChatDetail: React.FC = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const searchInput = React.useRef<HTMLInputElement>(null)
  const detailRef = React.useRef<HTMLDivElement>(null)
  const patientList = useSelector(state => state.patient.patientList);
  const chatContent = useSelector(state => state.chat.chatList)

  // get params in URL
  const { patientId } = useParams<{ patientId: string}>();

  const [chatDetail, setChatDetail] = useState<chatDetailData>(
    {
      id: 1,
      content: 'Hello',
      time: '09:00',
      icon: ''
    }
  );

  const [patientDetail, setPatientDetail] = useState<patientDetailData>(
    {
      id: 1, name: 'jessie',
      username: 'jessie',
      gender: 'female',
      phone: '02898987777',
      email: 'jessieyan214@gmail.com',
      icon: ''
    }
  );

  const [message, setMessage] = useState('');


  // handles the exit
  const handleClickLeftIcon = () => {
    history.go(-1)
  }

  // no right icon
  const handleClickRightIcon = () => {
    return false
  }

  // Rendering from role
  const renderChatDetail = () => {
    if (!chatDetail) return;
    return Object.keys(chatDetail).map((item: string, index: number) => {
      let detail: any = chatDetail[item as keyof typeof chatDetail];
      let icon: string = detail.id === 100 ? avatar.doctor[0] : patientDetail.icon;
      let role: string = detail.id === 100 ? 'doctor' : 'patient';

      return (
        <div key={index} className={Styles[`${role === 'doctor' ? 'doctorChatBox' : 'chatBox'}`]}>
          <div className={Styles.iconBox}><img src={icon} alt={'avatar'} className={Styles.iconImg} /></div>
          <div className={Styles.contentBox}><p>{detail.content}<span>{detail.time}</span></p></div>
        </div>)
    })
  }

  // search chat
  const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  // get current 
  const getDate = () => {
    let myDate = new Date();
    let h = myDate.getHours(); // get hour(0-23)
    let m = myDate.getMinutes(); // get minute(0-59)
    // let s = myDate.getSeconds();// get second(0-59)
    let timeStr = h + ':' + m;
    return timeStr;
  }

  const handleSentMessage = () => {
    let newChat = {
      id: 100,
      content: message,
      time: getDate()
    }
    let newContent = chatContent;
    if (newContent.hasOwnProperty(patientId)){
      newContent[Number(patientId)].push(newChat);
    } else {
      console.log(patientId, '---')
      newContent[patientId] = [newChat];
    }
    
    // update store
    dispatch({
      type: "save_chat",
      payload: newContent,
    })
    setChatDetail(newContent[Number(patientId)])
    setMessage('')
    // clear input text
    if (searchInput.current) {
      searchInput.current.value = '';
    }
  }

  // Set the scrollbar to the bottom when sent message
  useEffect(() => {
    const current = detailRef.current!
    current.scrollTop = current.scrollHeight
  }, [message])

  useEffect(() => {
    if (patientList) {
      let patientDetailData: patientDetailData = patientList.filter((p: any) => p.id === Number(patientId))[0];
      let chatDetailData: chatDetailData = chatContent[Number(patientId)];
      setChatDetail(chatDetailData)
      setPatientDetail(patientDetailData)
    }
  }, [chatContent, patientId, patientList])

  return (
    <div className={Styles.chatDetail}>
      <Header title={patientDetail.name} type={'chatDetail'} onClickLeftIcon={() => { handleClickLeftIcon() }} onClickRightIcon={() => { handleClickRightIcon() }} />
      <div className={Styles.detalBox} ref={detailRef} >
        {renderChatDetail()}
      </div>
      <div className={Styles.searchBox}>
        <form className={Styles.form}>
          <input ref={searchInput} type='text' placeholder='Type Something' className={Styles.inputBox} onChange={handleMessage} /><br />
        </form>
        <img src={sent} alt={'setMessage'} className={Styles.sentImg} onClick={handleSentMessage} />
      </div>
    </div>
  )
}
