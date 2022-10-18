import React,{ useState} from "react";
import Styles from './NewPatient.module.css';
import { Header } from "../../components";
import { useSelector } from "../../redux/hooks";
import avatarData from '../../mockdata/avatar.json';
import { useDispatch } from "react-redux";


const {useHistory} = require('react-router-dom');


export const NewPatient: React.FC = (props) => {  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [alterMessage, setAlterMessage] = useState('');
  
  const dispatch = useDispatch();
  const history = useHistory();
  const patientList = useSelector(state => state.patient.patientList);





  // handles the exit
  const handleClickLeftIcon = () => {
    history.go(-1)
  }

  // no right icon
  const handleClickRightIcon = () => {
    return false;
  }


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e, 'e')
    if (name === '' || email === '' || phone === '' || gender === '') {
      setAlterMessage('Please enter name, email, phone')
    } else {
      // get a avatar for new patient 
      let icon = gender === 'female' ? avatarData.female[Math.floor((Math.random() * avatarData.female.length))]:avatarData.male[Math.floor((Math.random() * avatarData.male.length))];
      let newPatient = { id: patientList.length + 1, name,gender, email, phone,icon}
      // console.log(newPatient,'newPatient')
      dispatch({
        type: "save_patientList",
        payload:[...patientList,newPatient]
      })
      history.push('./patientList')
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

  return (
    <div className={Styles.NewPatientContainer}>    
      <Header title={'New Patient'} type={'newpatient'} onClickLeftIcon={()=>{handleClickLeftIcon()}} onClickRightIcon={()=>{handleClickRightIcon()}}/>
      <form onSubmit={handleSubmit} className={Styles.formBox}>
          <div className={Styles.row}><input type='text' placeholder='name' className={Styles.inputBox} onChange={handleName}/></div>
          <div className={Styles.row}><input type='text' placeholder='email' className={Styles.inputBox} onChange={handleEmail}/></div>
          <div className={Styles.row}><input type='text' placeholder='phone' className={Styles.inputBox} onChange={handlePhone} /></div>
          <div className={Styles.rowRadio}>
            <input type="radio" checked={gender === "male"} onChange={handleSetGender} value="male"/> <span>Male</span>
            <input type="radio" checked={gender === "female"} onChange={handleSetGender} value="female"  /> Female
          </div>
          <p className={Styles.messageBox}>{alterMessage}</p>
          <button  className={Styles.buttonBox} type='submit'>Submit</button>
      </form>

   </div>
  )
}
