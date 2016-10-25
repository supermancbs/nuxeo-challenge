const INITIAL_STATE = {currentUser: {} }

const GetBatch = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'BATCH_ID':
  
      return Object.assign({}, state, {

      	batch: action.payload
      })
    default:
      return state
  }
}

export default GetBatch
