import React,{ useState} from "react";
import Styles from './NewPatientForDesktop.module.css';
import { useSelector } from "../../redux/hooks";
import avatarData from '../../mockdata/avatar.json';
import { useDispatch } from "react-redux";



interface PropsType{
  isShowAddDalogue: boolean;
  onClickAddPatient: (value:boolean,id?:string) => void;
}

export const NewPatientForDesktop: React.FC<PropsType> = ({
  isShowAddDalogue,
  onClickAddPatient,
}) => {  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [alterMessage, setAlterMessage] = useState('');
  
  const dispatch = useDispatch();
  const patientList = useSelector(state => state.patient.patientList);




  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name === '' || email === '' || phone === '' || gender === '') {
      setAlterMessage('Please enter name, email, phone')
    } else {
      // get a avatar for new patient 
      let icon = gender === 'female' ? avatarData.female[Math.floor((Math.random() * avatarData.female.length))]:avatarData.male[Math.floor((Math.random() * avatarData.male.length))];
      let newId = patientList[patientList.length - 1].id + 1;
      let newPatient = { id:newId, name, gender, email, phone, icon }
      // console.log(newPatient,'newPatient')
      dispatch({
        type: "save_patientList",
        payload: [...patientList, newPatient]
      });
      onClickAddPatient(false, newId);
    }
   
  }

  // when name has changed
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {    
    let value = e.target.value;
    setName(value)
    if (value.length >= 35) {
      setAlterMessage('Please enter a name within 30 characters')
    } else {
      setAlterMessage('')
    }
    
  };

  // when email has changed
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {    
    let value = e.target.value;
    setEmail(value)
    if (value.length >= 35) {
      setAlterMessage('Please enter a email within 30 characters')
    } else if (!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value))) {// eslint-disable-line
      setAlterMessage('please enter your vaild email')
    } else {
      setAlterMessage('')
    }
  };

  // when phone has changed
  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setPhone(value)
    if (value.length >= 35) {
      setAlterMessage('Please enter a email within 30 characters')
    } else if (!(/^\d{3}\d{7,8}$/.test(value))) {// eslint-disable-line
      setAlterMessage('please enter your vaild phone')
    } else {
      setAlterMessage('')
    }
  };

  // when choose gender
  const handleSetGender=(e:React.ChangeEvent<HTMLInputElement>)=> {
    setGender(e.target.value)
  }

  // When click cancel button
  const handleCancel = () => {
    onClickAddPatient(false,undefined)    
  }

  return (
    <div className={Styles.NewPatientContainer} style={{ display: `${isShowAddDalogue ? 'block' : 'none'}` }}>
      <form onSubmit={handleSubmit} className={Styles.formBox}>
          <h3>New Patient</h3>
          <div className={Styles.row}><input type='text' placeholder='name' className={Styles.inputBox} onChange={handleName}/></div>
          <div className={Styles.row}><input type='text' placeholder='email' className={Styles.inputBox} onChange={handleEmail}/></div>
          <div className={Styles.row}><input type='text' placeholder='phone' className={Styles.inputBox} onChange={handlePhone} /></div>
          <div className={Styles.rowRadio}>
            <input type="radio" checked={gender === "male"} onChange={handleSetGender} value="male"/> <span>Male</span>
            <input type="radio" checked={gender === "female"} onChange={handleSetGender} value="female"  /> Female
          </div>
        <p className={Styles.messageBox}>{alterMessage}</p>
        <div className={Styles.buttonContainer}>
          <button  className={Styles.cancelBox} onClick={()=>handleCancel()}>Cancel</button>
          <button className={Styles.buttonBox} type='submit' >Submit</button>
        </div>
        </form>
   </div>
  )
}
