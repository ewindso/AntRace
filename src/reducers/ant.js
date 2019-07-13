import { UPDATE_ANTS_DATA, START_ANT_COMPUTATIONS, UPDATE_ANT_COMPUTATION, ANT_COMPUTATIONS_FINISHED } from '../constants/actionTypes'

const initialState = {
  data: [], 
  isLoading: true, 
  computationStatus: 'not_yet_run',
  computations: {},
}

export default function ant(state=initialState, action) {
  const { type, payload } = action 

  switch(type) {
    case UPDATE_ANTS_DATA: {
      return { ...state, data: payload.data, isLoading: false }
    }
    case START_ANT_COMPUTATIONS: {
      return { ...state, computationStatus: 'in_progress' }
    }
    case UPDATE_ANT_COMPUTATION: {
      const { name, likelihood } = payload 

      const computations = { ...state.computations, [name]: likelihood }

      return { ...state, computations }
    }
    case ANT_COMPUTATIONS_FINISHED: {
      return { ...state, computationStatus: 'finished' }
    }
  }

  return state
}