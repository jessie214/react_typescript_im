import { createStore } from 'redux';
// import languageReducer from "./language/languageReducer";
import patientReducer from "./patient/patientReducer";
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(patientReducer,composeWithDevTools());

export type RootState = ReturnType<typeof store.getState>

export default store;