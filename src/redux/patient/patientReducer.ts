import { SAVE_PATIENTLIST } from "./patientActions";

export interface patientState {
  patientList: [];
  // { id: string; name: string ,username:string,email:string,address:{},phone:string,icon:string}[]
}

const defaultState: patientState = {
  patientList: [],
};
// console.log(PatientActionTypes:any)
const stateAction = (state = defaultState, action:any ) => {
  switch (action.type) {
    case SAVE_PATIENTLIST:
      return { ...state, patientList: action.payload };
    default:
      return state;
  }  
};

export default stateAction;