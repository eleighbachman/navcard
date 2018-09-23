export const SET_ACTIVE = 'SET_ACTIVE';
export const SHOW_FORM_DATA = 'SHOW_FORM_DATA';


export function setActiveButton(button) {
  return {
    type: SET_ACTIVE,
    payload: button
  }
}

export function showFormData(form) {
  return {
    type: SHOW_FORM_DATA,
    payload: form
  }
}
