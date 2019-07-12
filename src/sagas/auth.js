import { eventChannel } from 'redux-saga'
import { take, call, fork, put, select } from 'redux-saga/effects'
import { LOGIN_USER, LOGOUT_USER } from '../constants/actionTypes'
import { updateAntsData } from '../actions/auth'

const GRAPHQL_ENDPOINTS = [
  'https://antserver-blocjgjbpw.now.sh/graphqzl', 
  'https://guarded-shore-81814.herokuapp.com/graphql'
]

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

  if(loggedIn) {
    const { ants } = yield call(getAntsData)

    yield put(updateAntsData(ants))
  }
}


function *getAntsData(endpointNum = 0) {
  if(endpointNum >= GRAPHQL_ENDPOINTS.length) {
    endpointNum = 0
  }

  const endpoint = GRAPHQL_ENDPOINTS[endpointNum]

  const response = yield call(fetch, endpoint, {
    method: 'POST', 
    headers: { 'Content-Type': 'application/json' }, 
    body: JSON.stringify({
      query: '{ ants { name length color } }'
    })
  })

  if(response.status !== 200) {  // try again on different endpoint
    return yield call(getAntsData, endpointNum+1)
  }

  const { data } = yield call([response, response.json])

  return data
}