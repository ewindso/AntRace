import { UPDATE_ANTS_DATA } from '../constants/actionTypes'

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
  }

  return state
}