import {
  LOGIN_USER, 
  LOGOUT_USER, 
  UPDATE_ANTS_DATA,
} from '../constants/actionTypes'

export function loginUser() {
  return { type: LOGIN_USER }
}

export function logoutUser() {
  return { type: LOGOUT_USER }
}

export function updateAntsData(data) {
  return { type: UPDATE_ANTS_DATA, payload: { data } }
}