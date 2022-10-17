import React from "react";
import Styles from './Header.module.css';
import logout from '../../assets/images/logout.svg';
import addUser from '../../assets/images/adduser.svg';

interface PropsType {
  title: string;
  leftType: string;
  rightType: string;
}
export const Header: React.FC<PropsType> = ({
  title,
  leftType,
  rightType,
  // onClickLeftIcon,
  // onClickRightIcon,
}) => {
  return (
    <div className={Styles.header}>
      <div className={Styles.iconBox}><img src={logout} alt={'Log out'} className={Styles.leftIcon} /></div>
      <p className={Styles.title}>{title}</p>
      <div  className={Styles.iconBox}><img src={addUser} alt={'Adduser'} className={Styles.rightIcon} /></div>
    </div> 
  )
}
