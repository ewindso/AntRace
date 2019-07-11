import { eventChannel } from 'redux-saga'
import { take, call, fork, cancel, cancelled, select } from 'redux-saga/effects'
import { LOGIN_USER, LOGOUT_USER } from '../constants/actionTypes'

export function *watchAuthRequests() {
  let action 

  while(action = yield take(['persist/REHYDRATE', LOGIN_USER, LOGOUT_USER])) {
    const { type } = action 

    switch(type) {
      case 'persist/REHYDRATE':
      case LOGIN_USER:
      case LOGOUT_USER: {
        yield fork(checkUserLoggedIn)
        break 
      }
    }
  }
}

function *checkUserLoggedIn() {
  const {
    auth: {
      loggedIn
    }
  } = yield select() 

  console.log(loggedIn)
}