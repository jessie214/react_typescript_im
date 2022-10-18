import { createStore, combineReducers } from 'redux';
// import languageReducer from "./language/languageReducer";
import patientReducer from "./patient/patientReducer";
import ChatReducer from './chat/chatReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["user"]
}

const rootReducer = combineReducers({
  patient: patientReducer,
  chat: ChatReducer

})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, composeWithDevTools());

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

const storeContainer = { store, persistor };

export default storeContainer;