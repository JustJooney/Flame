//Importing the axios which helps us fetch or get that api stuff.
import axios from 'axios';
//Import the Url api info from api
//this is just pretty much getting a cleaner way instead of putting
//all the api stuff in here.
import {searchGameUrl} from '../api';
//IMPORTANT when creating actions use const varaible = () => async() => {} because using function
//will not work when especially you have arguments you got put it in.
export const fetchSearch = (game_name) => async(dispatch) => {
	//getting data from the api with axios
	const searchGames = await axios.get(searchGameUrl(game_name));
	//dispatch to send to the reducer to change the payload data.
	console.log(searchGames);
	dispatch({
		type: "FETCH_SEARCHED",
		payload: {
			searched: searchGames.data.results,
		}
	})
}