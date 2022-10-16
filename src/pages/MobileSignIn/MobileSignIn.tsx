import React from "react";
import topIcon from './../../assets/images/signicon.png';
import Styles from './MobileSignIn.module.css';



export const MobileSignIn: React.FC = (props) =>  {
  // const usernameRef = useRef();
  // const passwordRef = useRef();
//   const handleSubmit = (e)=>{
//     e.preventDefault();
//     const username = usernameRef.current.value;
//     const password = passwordRef.current.value;
// }

  return <div className={Styles.signInBox}>    
    <div className={Styles.signInContainer}><img src={topIcon} alt={'SignIn'} className={Styles.hearderImg} /></div>

    <h1>SignIn</h1> 
    <div className={Styles.signInForm}>
      <form>
          <input
            // ref={usernameRef}
            type='text' placeholder='username' className={Styles.inputBox}/><br />
          <input
            // ref={passwordRef}
          type='password' placeholder='password' className={Styles.inputBox} /><br />
          <button
            // onClick={handleSubmit}
          className={Styles.buttonBox}
            type='submit'>SignIn</button>
      </form>
    </div>
    {/* <Link to={'./welcome'}><button>SignIn</button></Link> */}
  </div>
}
