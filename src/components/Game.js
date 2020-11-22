//Import styled to style components
import styled from 'styled-components';
//Import motion for the animation part in framer-motion
import {motion} from 'framer-motion';
//this is to use dispatcht to call an action
import {useDispatch} from 'react-redux';
//this the action to get details
import {loadDetail} from '../actions/detailAction';
//this is using Link for react-router-dom to link Game.js to GameDetail.js
import {Link} from 'react-router-dom';
//this is where import the function to reduce the size of the image from util
import {smallImage} from '../util';
//this is the popup animation settings for framer-motion
import {popup} from '../animation';
//This is the Game component
function Game({name, released, image, id}){
	//This is pretty much creating the Game pathId to a string so it can be the same variable as the
	//Game Detail pathId
	const stringPathId = id.toString();
	//creating dispatch varible to use the useDipsatch method from react-redux
	const dispatch = useDispatch();
	//this function first gets rid of the scroll bar so it can't be scrolled when looking at the popped up gamedetail
	//component then it dispatch the loadDetail action which gets the information for the specific game.
	function loadDetailHandler(){
		document.body.style.overflow = "hidden";
		dispatch(loadDetail(id));
	};
	//you got the layoutId to connect with te stringPathId for the AnimateLayout from react-router-dom
	//also got the onClick function for the loadDetailHandler to start the dispatch funciton of loadDetail
	//so when you click on the game it load the gameDetail(id) which the id is gotten from the loadGames in Home.js
	//then links the /game/${id} to the url so it pops out the game details.
	//and for the motion.h3 and motion.img connecting the layoutId so making the transition smoother.
	return(
		<StyledGame variants={popup} initial="hidden" animate="show" layoutId={stringPathId} onClick={loadDetailHandler}>
			<Link to={`/game/${id}`}>
			<motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>	
			<p>{released}</p>
			<motion.img layoutId={`image ${stringPathId}`} src={smallImage(image, 640)} alt={name} />
			</Link>
		</StyledGame>
	)
}

const StyledGame = styled(motion.div)`
	min-height: 30vh;
	box-shadow: 0px 5px 20px rgb(0, 0, 0, 0.2);
	text-align: center;
	border-radius: 1rem;
	cursor: pointer;
	overflow: hidden;
	img{
		width: 100%;
		height: 40vh;
		object-fit: cover;
	}
`

export default Game;