import {
  LOGIN_USER, 
  LOGOUT_USER
} from '../constants/actionTypes'

const initialState = {
  loggedIn: false
}

export default function auth(state=initialState, action) {
  const { type, payload } = action 

  switch(type) {
    case LOGIN_USER: {
      return { ...state, loggedIn: true }
    }
    case LOGOUT_USER: {
      return { ...state, loggedIn: false }
    }
  }

  return state 
}