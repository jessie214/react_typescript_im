export const SAVE_CHATLIST = "save_chatlist";

interface saveChatAction{
  type: typeof SAVE_CHATLIST,
  payload:any
}
export type ChatActionTypes = saveChatAction;

export const saveChatActionCreator = (chatList: any): saveChatAction => {
  return {
    type: SAVE_CHATLIST,
     payload:chatList
  }
  
}