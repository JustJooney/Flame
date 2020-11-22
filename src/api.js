//This is the base url for the api we are running which is from rawg.io
const base_url = 'https://api.rawg.io/api/';

//Getting the current month
//we put + 1 after getmonth() because 
//get Month returns a month before because it starts at 0
function getCurrentMonth(){
	const month = new Date().getMonth() + 1;
	if(month < 10){
		return `0${month}`;
	} else{
		return month;
	}
}

//Getting the current day
function getCurrentDay(){
	const day = new Date().getDate();
	if(day < 10){
		return `0${day}`;
	} else{
		return day;
	}
}

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
//Current Date, Next Year, Last Year
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//this is the extension to the base url so we can get popular games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
//this is the extension to the base url so we can get upcoming games
const upcoming_games= `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
//this is the extension to the base url so we can get new games
const newGames =`games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;
//function to return the base and extension for the api calls
export function popularGamesUrl(){
	return `${base_url}${popular_games}`;
}

export function upcomingGamesUrl(){
	return `${base_url}${upcoming_games}`;
}

export function newGamesUrl(){
	return `${base_url}${newGames}`;
}
//this one is a little different because it takes in an argument 
//of the game_id so we can specify to GET the details of the game
//we just clicked
export function gameDetailsUrl(game_id){
	return `${base_url}games/${game_id}`;
}
//GETting the game details screenshots
export function gameScreenshotUrl(game_id){
	return `${base_url}games/${game_id}/screenshots`;
}
//this function takes in an input from the user so it can search
//for games
export function searchGameUrl(game_name){
	return `${base_url}games?search=${game_name}&page_size=9`;
}