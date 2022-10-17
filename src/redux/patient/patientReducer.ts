export interface patientState {
  patientList: [];
  // { id: string; name: string ,username:string,email:string,address:{},phone:string,icon:string}[]
}

const defaultState: patientState = {
  patientList: [],
};

const stateAction= (state = defaultState, action: any) => {
  if (action.type === "savePatientList") {
    const newState = {...state,patientList:action.payload}
    return newState;
  }
  return state;
};

export default stateAction;