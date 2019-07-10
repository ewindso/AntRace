import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import { watchLaunch } from '../sagas/launch'
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

sagaMiddleware.run(watchLaunch)

export default store