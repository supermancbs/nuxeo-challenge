const INITIAL_STATE = {currentFolder: {} }

const CurrentFolder = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'GET_FOLDER':
      return Object.assign({}, state, {

      	currentFolder: action.payload
      })
    default:
      return state
  }
}

export default CurrentFolder
