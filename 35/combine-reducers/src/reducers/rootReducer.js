import {combineReducers} from 'redux'
import itemsReducer from './itemsReducer'
import usersReducer from './usersReducer'
const rootReducer = combineReducers({
    itemsReducer: itemsReducer,
    usersReducer: usersReducer
})
export default rootReducer