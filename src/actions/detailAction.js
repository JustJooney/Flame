	//Importing the axios which helps us fetch or get that api stuff.
import axios from 'axios';
//Import the Url api info from api
//this is just pretty much getting a cleaner way instead of putting
//all the api stuff in here.
import {gameDetailsUrl, gameScreenshotUrl} from '../api'

//IMPORTANT when creating actions use const varaible = () => async() => {} because using function
//will not work when especially you have arguments you got put it in.
export const loadDetail = (id) => async(dispatch) => {
	//this is the dispatch function we are telling the reducer which switch to do.
	//this is for the IsLoading so we can tell to load the games detail or not
	dispatch({
		type: "LOADING_DETAIL",
	})
	//getting the datas from the API
	const detailData = await axios.get(gameDetailsUrl(id));
	const screenShotData = await axios.get(gameScreenshotUrl(id));

	//this is the dipsatch for the get Details stuff
	//make sure to put payload so the reducer knows to switch out game: , screen: for the datas.
	dispatch({
		type: "GET_DETAIL",
		payload: {
			game: detailData.data,
			screen: screenShotData.data,
		}
	})
}
