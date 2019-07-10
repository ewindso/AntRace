import { eventChannel } from 'redux-saga'
import { take, call, fork, cancel, cancelled, select } from 'redux-saga/effects'

export function *watchLaunch() {
  // TODO 
  console.log('watch me!')
}