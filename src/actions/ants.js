import {
  START_ANT_COMPUTATIONS, 
  UPDATE_ANT_COMPUTATION, 
  ANT_COMPUTATIONS_FINISHED,
} from '../constants/actionTypes'

export function startAntComputations() {
  return { type: START_ANT_COMPUTATIONS }
}

export function updateAntComputation(name, likelihood) {
  return { type: UPDATE_ANT_COMPUTATION, payload: { name, likelihood } }
}