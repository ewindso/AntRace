import { eventChannel } from 'redux-saga'
import { take, call, fork, cancel, cancelled, select } from 'redux-saga/effects'
import { LOGIN_REQUEST, LOGOUT_REQUEST } from '../constants/actionTypes'

export function *watchAuthRequests() {
  let action 

  while(action = yield take([LOGIN_REQUEST, LOGOUT_REQUEST])) {
    console.log(action)
  }
}