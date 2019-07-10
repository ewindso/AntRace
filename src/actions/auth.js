import {
  LOGIN_USER, 
  LOGOUT_USER
} from '../constants/actionTypes'

export function loginUser() {
  return { type: LOGIN_USER }
}

export function logoutUser() {
  return { type: LOGOUT_USER }
}