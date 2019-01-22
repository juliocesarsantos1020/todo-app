import { combineReducers } from 'redux';
import todoReducer from '../components/redurces/todoRedurces'
const rootReducer = combineReducers({
    todo: todoReducer
})

export default rootReducer