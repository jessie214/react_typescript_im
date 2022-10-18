import { createStore,combineReducers } from 'redux';
// import languageReducer from "./language/languageReducer";
import patientReducer from "./patient/patientReducer";
import ChatReducer from './chat/chatReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  patient: patientReducer,
  chat:ChatReducer

})
const store = createStore(rootReducer,composeWithDevTools());

export type RootState = ReturnType<typeof store.getState>

export default store;