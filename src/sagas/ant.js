import { eventChannel } from 'redux-saga'
import { take, call, fork, cancel, cancelled, select } from 'redux-saga/effects'
import { START_ANT_COMPUTATIONS } from '../constants/actionTypes'

export function* watchAntRequests() {
  let action

  while(action = yield take([START_ANT_COMPUTATIONS])) {
    const { type, payload } = action 

    switch(type) {
      case START_ANT_COMPUTATIONS: {
        
        break 
      }
    }
  }
}