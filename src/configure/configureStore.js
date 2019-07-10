import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { watchAuthRequests } from '../sagas/auth'
import auth from '../reducers/auth'
import ant from '../reducers/ant'

const reducers = combineReducers({ auth, ant })

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, reducers)

const logger = createLogger({})
const sagaMiddleware = createSagaMiddleware()

let store 

if(__DEV__) {
  store = createStore(
    persistedReducer, 
    applyMiddleware(logger, sagaMiddleware)
  )
} else {
  store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware)
  )
}

sagaMiddleware.run(watchAuthRequests)

const persistor = persistStore(store)

export default store