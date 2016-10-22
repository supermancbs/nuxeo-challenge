import { combineReducers } from 'redux';
import currentUser from './currentuser'

const Reducer = combineReducers({
  currentUser: currentUser,
})

export default Reducer
