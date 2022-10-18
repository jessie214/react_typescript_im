import { SAVE_CHAT } from "./chatActions";

export interface chatState {
  chatList: [];
  // { id: string; name: string ,username:string,email:string,address:{},phone:string,icon:string}[]
}

const defaultState: chatState = {
  chatList: [],
};
// console.log(PatientActionTypes:any)
const stateAction = (state = defaultState, action:any ) => {
  switch (action.type) {
    case SAVE_CHAT:
      return { ...state, chatList: action.payload };
    default:
      return state;
  }  
};

export default stateAction;