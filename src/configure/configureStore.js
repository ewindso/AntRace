import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import { watchAuth } from '../sagas/auth'
import ant from '../reducers/ant'

const logger = createLogger({})
const sagaMiddleware = createSagaMiddleware()

let store 

if(__DEV__) {
  store = createStore(
    ant, 
    applyMiddleware(logger, sagaMiddleware)
  )
} else {
  store = createStore(
    ant,
    applyMiddleware(sagaMiddleware)
  )
}

sagaMiddleware.run(watchAuth)

export default store