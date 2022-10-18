import React from "react";
import Styles from './Header.module.css';
import logout from '../../assets/images/logout.svg';
import addUser from '../../assets/images/adduser.svg';
import returnIcon from '../../assets/images/return.svg';

interface PropsType {
  title: string;
  type: string;
  onClickLeftIcon: () => void;
  onClickRightIcon: () => void;
}
export const Header: React.FC<PropsType> = ({
  title,
  type,
  onClickLeftIcon,
  onClickRightIcon,
}) => {

  const renderLeftIcon = () => {
    if (type === 'patientList') {
      return <img src={logout} alt={'Log out'} className={Styles.leftIcon} />
    } else {
      return <img src={returnIcon} alt={'return'} className={Styles.leftIcon} />;
    }
  }

  const renderRightIcon = () => {
    if (type === 'patientList') {
      return <img src={addUser} alt={'Log out'} className={Styles.rightIcon} />
    } else {
      return null;
    }
  }

  return (
    <div className={Styles.header}>
      <div className={Styles.iconBox} onClick={() => onClickLeftIcon()}>{renderLeftIcon()}</div>
      <p className={Styles.title}>{title}</p>
      <div className={Styles.iconBox} onClick={() => onClickRightIcon()}>{renderRightIcon()}</div>
    </div> 
  )
}
