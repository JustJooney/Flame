//Importing the useEffect so it runs as we open the site	
import {useEffect} from 'react';
//Import useLocation from react-router-dom so we can know where we are in the page.
import {useLocation} from 'react-router-dom';
//Import useDispatch so we can dispatch an action from the action for redux
//Import useSelector so we can access the redux states 
//example: 
//	const {stateInTheRedux} = useSelector(state => state.object,Array,orVariables);
//then after you can just use stateInTheRedux to get the information;
import {useDispatch, useSelector} from 'react-redux';
//Import Loadgames function from the action page.
import {loadGames} from '../actions/gamesAction';
//Importing styled from styled-components so we can style the page
import styled from 'styled-components';
//Importing motion so we can animate the html
//Importing AnimatePresence so we can animate the component when it leaves
//Importing AnimateSharedLayout this is to connect the any tag so it can animate with different components
//So for AnimationSharedLayout to know which on connects to which you put pathId so it knows they are connected to animate.
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion';
//this is the style animations from framer motion
import {fadeIn} from '../animation';
//Components
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';
//This is the component for home which holds the Game and Gamedetails components
function Home(){
	//This location variable is getting the location we are in at the moment
	const location = useLocation();
	//this gets that pathId of the location we clicked on.
	const pathId = location.pathname.split('/')[2];
	//creating a variable so we can use the useDispatch from redux
	const dispatch = useDispatch();
	//using useEffect to start the dipsatch for the loadGames action to the reducer to get the games
	useEffect(() => {
		dispatch(loadGames());
	},[dispatch]);
	//after the dispatch happens the states are updated with the game and then we use the useSelector 
	//to access those states then we render it to the dom
	const {popular, newGames, upcoming, searched} = useSelector(state => state.games);
	//	you got the AnimateSharedLayout surround the whole list of games rendering except the GameList which is holding everything
	//together then you got AnimatePresence surrounding the GameDetail so it can animate. There is closing brackets for the pathId
	//and <GameDetail /> and it only renders if both are true. So in the GameDetail you see a pathId={pathId} the pathId is connecting
	//with the game on Game.js for the smoother transiton.
	//	for the {search.length} is checking whether there is something search because if there is it just doesn't rendet the search section.
	return(
		<GameList variants={fadeIn} initial="hidden" animate="show">
			<AnimateSharedLayout type="crossfade">
				<AnimatePresence>
				{pathId && <GameDetail pathId={pathId}/>}
				</AnimatePresence>
			{searched.length ? (
				<div className='searched'>
					<h2>Searched Games</h2>
					<Games>
						{searched.map((game) => (
							<Game 
								name={game.name} 
								released={game.released} 
								id={game.id} 
								image={game.background_image} 
								key={game.id}
							/>
						))}
					</Games>
				</div>
			) : ''}
			<h2>Upcoming Games</h2>
			<Games>
				{upcoming.map((game) => (
					<Game 
						name={game.name} 
						released={game.released} 
						id={game.id} 
						image={game.background_image} 
						key={game.id}
					/>
				))}
			</Games>
			<h2>Popular Games</h2>
			<Games>
				{popular.map((game) => (
					<Game
						name={game.name} 
						released={game.released} 
						id={game.id} 
						image={game.background_image} 
						key={game.id}
					/>
				))}
			</Games>
			<h2>New Games</h2>
			<Games>
				{newGames.map((game) => (
					<Game 
						name={game.name} 
						released={game.released} 
						id={game.id} 
						image={game.background_image} 
						key={game.id}
					/>
				))}
			</Games>
			</AnimateSharedLayout>
		</GameList>
	);
}

const GameList = styled(motion.div)`
	padding: 0rem 5rem;
	h2{
		padding: 5rem 0rem;
	}
`

const Games = styled(motion.div)`
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
	grid-column-gap: 3rem;
	grid-row-gap: 5rem;
`

export default Home;