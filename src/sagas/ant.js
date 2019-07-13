import { eventChannel } from 'redux-saga'
import { take, call, fork, cancel, cancelled, select } from 'redux-saga/effects'
import { START_ANT_COMPUTATIONS } from '../constants/actionTypes'

export function* watchAntRequests() {
  let action

  while(action = yield take([START_ANT_COMPUTATIONS])) {
    const { type, payload } = action 

    switch(type) {
      case START_ANT_COMPUTATIONS: {
        yield fork(startAntComputations)
        break 
      }
    }
  }
}

function* startAntComputations() {
  const {
    ant: {
      data
    }
  } = yield select() 

  const channel = yield call(antCalculator, data)
  let antsLeftToCompute = data.length 

  while(antsLeftToCompute > 0) {
    const { antName, likelihood } = yield take(channel)
    console.log(antName, likelihood)
    antsLeftToCompute--
  }

  channel.close()
}

function antCalculator(antsData) {
  return eventChannel(emit => {

    antsData.forEach(antData => {
      const calc = generateAntWinLikelihoodCalculator()
      calc(likelihood => {
        emit({ antName: antData.name, likelihood })
      })
    })

    return () => {}
  })
}

function generateAntWinLikelihoodCalculator() {
  const delay = 7000 + Math.random() * 7000;
  const likelihoodOfAntWinning = Math.random();

  return (callback) => {
    setTimeout(() => {
      callback(likelihoodOfAntWinning);
    }, delay);
  };
}