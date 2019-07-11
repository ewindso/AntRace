import { all } from 'redux-saga/effects'
import { watchAuthRequests } from './auth'
import { watchAntRequests } from './ant'

export default function* rootSaga() {
  yield all([
    watchAuthRequests(), 
    watchAntRequests()
  ])
}