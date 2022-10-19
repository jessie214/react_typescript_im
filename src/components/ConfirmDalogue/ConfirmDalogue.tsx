import React from "react";
import Styles from './ConfirmDalogue.module.css';

interface PropsType {
  isShow: boolean;
  content: string;
  onClickConfirm: () => void;
  onClickCancel: () => void;
}
export const ConfirmDalogue: React.FC<PropsType> = ({
  isShow,
  content,
  onClickConfirm,
  onClickCancel,
}) => {



  return (
    <div className={Styles.confirmDalogue} style={{ display: `${isShow ? 'block' : 'none'}` }}>
      <div className={Styles.dalogueBox} >
        <p className={Styles.content}>{isShow}{content}</p>
        <div className={Styles.buttonBox}>
          <button className={Styles.confirmButton} type='button' onClick={() => onClickConfirm()}>Confirm</button>
          <button className={Styles.cancelButton} type='button' onClick={() => onClickCancel()}>Cancel</button>
        </div>
      </div>
    </div>
  )
}
