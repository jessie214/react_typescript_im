import { SAVE_CHATLIST } from "./chatActions";

export interface chatState {
  chatList: any;
}

const defaultState: chatState = {
  chatList: {},
};
// console.log(PatientActionTypes:any)
const stateAction = (state = defaultState, action: any) => {
  switch (action.type) {
    case SAVE_CHATLIST:
      return { ...state, chatList: action.payload };
    default:
      return state;
  }  
};
export default stateAction;