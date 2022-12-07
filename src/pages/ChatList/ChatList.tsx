import React, { useEffect, useState } from "react";
import Styles from './ChatList.module.css';
import { ChatCard } from "../../components";
import { Header } from "../../components";
import { Menu } from "../../components/Menu";
import { useSelector } from "../../redux/hooks";

const { useHistory } = require('react-router-dom');

interface chatData {
  id: { id: number, content: string, time: string }[],
}

export const ChatList: React.FC = () => {

  const history = useHistory();
  const [chatListData, setChatListData] = useState([]); // The data displayed in the list includes searches
  const [allChatData, setAllChatData] = useState([]); // All data of the list
  const patientList = useSelector(state => state.patient.patientList);
  const chatContent = useSelector(state => state.chat.chatList)


  // Process data format as chat list
  const handleData = () => {
    let newList: any = [];
    Object.keys(chatContent).forEach((key) => {
      let patientId: number = Number(key);
      let patientData: any = patientList.filter((p: any) => p.id === patientId)[0];
      if (!patientData){return}
      let list = {
        id: patientId,
        name: patientData.name,
        time: chatContent[key as keyof chatData][chatContent[key as keyof chatData].length - 1].time,
        lastContent: chatContent[key as keyof chatData][chatContent[key as keyof chatData].length - 1].content,
        icon: patientData.icon
      }
      newList.push(list);
    })
    setChatListData(newList);
    setAllChatData(newList);
  }

  useEffect(() => {
    handleData()
  }, [])// eslint-disable-line

  // when click patient
  const handleSelectChat = (id: number) => {
    history.push(`/chatdetail/${id}`)
  }

  // search chat
  const handleSearchUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    let keyWord = e.target.value;
    if (keyWord === '') {
      setChatListData(allChatData);
    } else {
      let newPatientList = chatListData.slice();
      let searchResult = newPatientList.filter((p: any) => p.name.toUpperCase().indexOf(keyWord.toUpperCase()) > -1)
      setChatListData(searchResult)
    }
  };

  // handles the exit
  const handleClickLeftIcon = () => {
    history.go(-1)
  }

  // no rightIcon in this page
  const handleClickRightIcon = () => {
    return false;
  }

  return (
    <div className={Styles.patientListContainer}>
      <Header
        title={'Chat'}
        type={'chatList'}
        onClickLeftIcon={() => { handleClickLeftIcon() }}
        onClickRightIcon={() => { handleClickRightIcon() }} />
      <div className={Styles.searchBox}>
        <form >
          <input type='text' placeholder='search' className={Styles.inputBox} onChange={handleSearchUser} /><br />
        </form>
      </div>
      <div className={Styles.listBox}>
        {chatListData && chatListData.map((p: any) => (
          <ChatCard
            key={p.id}
            id={p.id}
            icon={p.icon}
            name={p.name}
            time={p.time}
            lastContent={p.lastContent}
            onShowChatDetail={() => { handleSelectChat(p.id) }} />))}
      </div>
      <Menu selected={'message'} />
    </div>
  )
}
