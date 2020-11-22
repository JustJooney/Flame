//This page is combining all the reducers we have created so far
//Importing combineReducer from redux which combines all reducer to one
import { combineReducers } from 'redux';
//Importing the diffrent reducers to combine into one
import detailReducer from './detailReducer';
import gamesReducer from './gamesReducer';
//this is a variable that is holing the combineReducers function combine
//the seperate reducers.
const rootReducer = combineReducers({
	games: gamesReducer,
	detail: detailReducer
})

export default rootReducer;