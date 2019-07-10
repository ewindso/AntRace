import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import { watchAuthRequests } from '../sagas/auth'
import auth from '../reducers/auth'
import ant from '../reducers/ant'

const reducers = combineReducers({ auth, ant })

const logger = createLogger({})
const sagaMiddleware = createSagaMiddleware()

let store 

if(__DEV__) {
  store = createStore(
    reducers, 
    applyMiddleware(logger, sagaMiddleware)
  )
} else {
  store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
  )
}

sagaMiddleware.run(watchAuthRequests)

export default store