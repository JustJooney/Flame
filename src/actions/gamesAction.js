//Importing the axios which helps us fetch or get that api stuff.
import axios from 'axios';
//Import the Url api info from api
//this is just pretty much getting a cleaner way instead of putting
//all the api stuff in here.
import {popularGamesUrl, upcomingGamesUrl, newGamesUrl} from '../api';
//IMPORTANT when creating actions use const varaible = () => async() => {} because using function
//will not work when especially you have arguments you got put it in.
export const loadGames = () => async(dispatch) => {
		//Fetch data use axios stuff
		const popularData = await axios.get(popularGamesUrl());	
		const upcomingData = await axios.get(upcomingGamesUrl());
		const newGamesData = await axios.get(newGamesUrl());
		//this dispatch the FETCH_GAMES to the reducer and changes the data of the payload to the data.
		console.log(popularData);
		dispatch({
			type: "FETCH_GAMES",
			payload: {
				popular: popularData.data.results,
				upcoming: upcomingData.data.results,
				newGames: newGamesData.data.results,
			}
		})
};
