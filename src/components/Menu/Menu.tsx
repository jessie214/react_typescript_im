import React from "react";
import Styles from './Menu.module.css';
import message from '../../assets/images/message.svg';
import contact from '../../assets/images/contact.svg';
import messageSelect from '../../assets/images/messageSelected.svg';
import contactSelect from '../../assets/images/contactSelected.svg';

const {useHistory} = require('react-router-dom');
interface PropsType {
  selected: string;
  // type: string;
  // onClickLeftIcon: () => void;
  // onClickRightIcon: () => void;
}
export const Menu: React.FC<PropsType> = ({
  selected,
  // type,
  // onClickLeftIcon,
  // onClickRightIcon,
}) => {
  const history = useHistory();
  const handleOnClick = (target:string) => {
    if (selected === target) return;
    if (selected === 'contact') {
      history.push('/chatList');
    } else {
      history.push('/patientList');
    }
  }
  return (
    <div className={Styles.menu}>
        <div onClick={()=>handleOnClick('contact')}><img src={selected === 'contact'?contactSelect:contact} alt={'contact'} className={Styles.rightIcon} /></div>
        <div onClick={()=>handleOnClick('message')}><img src={selected === 'message'?messageSelect:message} alt={'message'} className={Styles.rightIcon} /></div>
      </div>
  )
}
