import { UPDATE_ANTS_DATA, START_ANT_COMPUTATIONS } from '../constants/actionTypes'

const initialState = {
  data: [], 
  isLoading: true, 
  computationStatus: 'not_yet_run',
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
  }

  return state
}