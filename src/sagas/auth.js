import { eventChannel } from 'redux-saga'
import { take, call, fork, cancel, cancelled, select } from 'redux-saga/effects'
import { LOGIN_USER, LOGOUT_USER } from '../constants/actionTypes'

export function *watchAuthRequests() {
  let action 

  while(action = yield take([LOGIN_USER, LOGOUT_USER])) {
    console.log(action)
  }
}