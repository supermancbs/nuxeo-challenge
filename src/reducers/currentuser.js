const INITIAL_STATE = {currentUser: {} }

const CurrentUser = (state = INITIAL_STATE, action) => {

  switch(action.type) {

    case 'LOG_IN':
      return Object.assign({}, state, {
      	currentUser: action.payload
      })
    default:
      return state
  }
}

export default CurrentUser
