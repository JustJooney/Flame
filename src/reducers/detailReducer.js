//This is pretty much the state as in the useState in react
//but using it at react-redux
const initState = {
	game: { platforms: []},
	screen: { results: []},
	isLoading: true,
}
//this is the setState section but with more functions
//it takes 2 arguements the initial State and then the action(which is wrote somewhere else)
//inside the function we use the switch function(you can use if and else functions too) to check
//what action.type is being dispatch(green light to go)so it can return the changed state.
//and at the end always return just the {...state} if nothing is happening
//because the reducer is always looping and listening.
function detailReducer(state = initState, action){
	switch(action.type){
		case "GET_DETAIL":
			return {
				...state,
				game: action.payload.game,
				screen: action.payload.screen,
				isLoading: false,
			}
		case "LOADING_DETAIL":
			return{
				...state,
				isLoading: true,
			}
		default:
			return { ...state };
	}
}

export default detailReducer;