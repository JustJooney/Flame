//This is pretty much the state as in the useState in react
//but using it at react-redux
const initState = {
	popular: [],
	newGames: [],
	upcoming: [],
	searched: [],
}
//this is the setState section but with more functions
//it takes 2 arguements the initial State and then the action(which is wrote somewhere else)
//inside the function we use the switch function(you can use if and else functions too) to check
//what action.type is being dispatch(green light to go)so it can return the changed state.
//and at the end always return just the {...state} if nothing is happening
//because the reducer is always looping and listening.
function gamesReducer(state = initState, action){
	switch(action.type){
		case 'FETCH_GAMES':
			return {
				...state,
			 	popular: action.payload.popular,
			 	upcoming: action.payload.upcoming,
			 	newGames: action.payload.newGames
			};
		case 'FETCH_SEARCHED':
			return {
				...state,
				searched: action.payload.searched,
			}
		case 'CLEAR_SEARCHED':
			return{
				...state,
				searched: [],
			}
		default:
			return {...state}
	}
}


export default gamesReducer;