import React from "react";
import Styles from './ChatCard.module.css';


interface PropsType {
  id: number;
  icon: string;
  name: string;
  time: string;
  lastContent: string;
  onShowChatDetail: () => void;
}
export const ChatCard: React.FC<PropsType> = ({
  id,
  name,
  time,
  icon,
  lastContent,
  onShowChatDetail
}) => {
  return (
    <div key={id} className={Styles.card} onClick={() => onShowChatDetail()}>
      <div className={Styles.imgBox}>
        <img src={icon} alt={name} className={Styles.icon} />
        <div className={Styles.contentBox}>
          <p className={Styles.name}>{name}<span>{time}</span></p>
          <p>{lastContent}</p>
        </div>        
      </div>
    </div>
  )
}
