import { combineReducers } from 'redux';
import currentUser from './currentuser'
import currentFolder from './currentfolder'

const Reducer = combineReducers({
  currentUser: currentUser,
  currentFolder: currentFolder,
})

export default Reducer
