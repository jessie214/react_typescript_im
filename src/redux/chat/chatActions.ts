export const SAVE_CHAT = "save_patientList";

interface savePatientAction{
  type: typeof SAVE_CHAT,
  payload:[]
}
export type PatientActionTypes = savePatientAction;

export const savePatientActionCreator = (pationtList: []): savePatientAction => {
  return {
    type: SAVE_CHAT,
     payload:pationtList
  }
  
}