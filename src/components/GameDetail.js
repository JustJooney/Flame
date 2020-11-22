//Import styled to style components
import styled from 'styled-components';
//Import motion for the animation part in framer-motion
import {motion} from 'framer-motion';
//this is to use dispatch to call an action
import {useSelector} from 'react-redux';
//this is to get the access of the url you're in
import {useHistory} from 'react-router-dom';	
//funciton to convert images to a smaller size
import {smallImage} from '../util';
//import images from the image folder
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';
//this is the component of the GameDetail and it has a prop of pathId
function GameDetail({pathId}){
	//grabs the states using useSelector
	const {screen, game, isLoading} = useSelector((state) => state.detail);
	//grabs the instance of the history of the sit
	const history = useHistory();
	//this function grabs the target element then it
	//puts the Game scrollbar back and then the history.push('/') 
	//puts the url back to / section
	function exitDetailHandler(e){
		const element = e.target;
		if(element.classList.contains('shadow')){
			document.body.style.overflow = "auto";
			history.push("/");
		}
	}
	//function to get the right images 
	function getPlatform(platform){
		switch(platform){
			case "PlayStation 4":
				return playstation;
			case "Xbox One":
				return xbox;
			case "PC":
				return steam;
			case "Nintendo Switch":
				return nintendo;
			case "iOS":
				return apple;
			default:
				return gamepad;
		}
	}
	//fucntion to get the right stars for the rating
	function getStars(){
		const stars = [];
		const rating = Math.floor(game.rating);
		for(let i = 1; i <= 5; i++){
			if(i <= rating){
				stars.push(<img alt="star" key={i} src={starFull}/>)
			} else{
				stars.push(<img alt="star" key={i} src={starEmpty}/>)
			}
		}
		return stars;
	}
	//so for this we have an isLoading to check if we got all the information of the GameDetail but if we haven't we dont rend the details
	//then we got an onClick for the cardShadow which when clicked it does the exitDetailHandler function.
	//also go the Layout Id to connect the smoother transition as you can see it has {`title ${pathId}`} it so the titles transition together.
	
	return(
		<>
		{!isLoading && (
		<CardShadow className="shadow" onClick={exitDetailHandler}>
			<Detail layoutId={pathId}>
				<Stats>
					<div className='rating'>
						<motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
						<p>Rating: {game.rating}</p>
						{getStars()}
					</div>
					<Info>
						<h3>Platforms</h3>
						<Platforms>
							{game.platforms.map((data) => (
								<img key={data.platform.id} src={getPlatform(data.platform.name)} alt={data.platform.name}/>
							))}

						</Platforms>
					</Info>	
				</Stats>
				<Media>
					<motion.img layoutId={`image ${pathId}`} src={smallImage(game.background_image, 1280)} alt={game.background_image}/>
				</Media>
				<Description>
					<p>{game.description_raw}</p>
				</Description>
				<div className='gallery'>
					{screen.results.map((screen) => (
						<img src={smallImage(screen.image, 1280)} key={screen.id} alt={screen.image}/>
					))}
				</div>
			</Detail>
		</CardShadow>
		)}
		</>
	);
}

const CardShadow = styled(motion.div)`
	width: 100%;
	min-height: 100vh;
	overflow-y: scroll;
	background: rgba(0, 0, 0, 0.5);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 5;
	&::-webkit-scrollbar{
		width: 0.5rem;

	}
	&::-webkit-scrollbar-thumb{
		background-color: #ff7676;
	}
	&::-webkit-scrollbar-track{
		background: white;
	}
`

const Detail = styled(motion.div)`
	width: 80%;
	border-radius: 1rem;
	padding: 2rem 5rem;
	background: white;
	position: absolute;
	left: 10%;
	color: black;
	z-index: 10;
	img{
		width: 100%;
	}
`

const Stats = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	img{
		width: 2rem;
		height: 2rem; 
		display: inline;
	}
`

const Info = styled(motion.div)`
	text-align: center;
`

const Platforms = styled(motion.div)`
	display: flex;
	justify-content: space-evenly;
	img{
		margin-left: 3rem;
	}
`

const Media = styled(motion.div)`
	margin-top: 5rem;
	img{
		width: 100%;
	}
`

const Description = styled(motion.div)`
	margin: 5rem 0rem;
`
export default GameDetail;