export const SAVE_PATIENTLIST = "save_patientList";

interface savePatientAction{
  type: typeof SAVE_PATIENTLIST,
  payload:[]
}
export type PatientActionTypes = savePatientAction;

export const savePatientActionCreator = (pationtList: []): savePatientAction => {
  return {
    type: SAVE_PATIENTLIST,
     payload:pationtList
  }
  
}