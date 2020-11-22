//importing useState its okay to useState if its just one section you do not have to go through
//all the troubles using reducer to make a simple state
import {useState} from 'react';
//styling using styled-components
import styled from 'styled-components';
//using the motion to animate stuff
import {motion} from 'framer-motion';
//import images from img
import logo from '../img/logo.svg';
//this is the fetchSearch section from action to send using dispatch
import {fetchSearch} from '../actions/searchAction';
//this is to get to use the useDispatch for redux
import {useDispatch} from 'react-redux';
//animation settings for framer-motion
import {fadeIn} from '../animation';
//This is the Nav component
function Nav(){
	//making useDispatch to use as variable
	const dispatch = useDispatch();
	//simple state to use as an variable
	const [textInput, setTextInput] = useState('');
	//this sets the text input on the form 
	function inputHandler(e){
		setTextInput(e.target.value);
	}
	//this pretty much turning all the gears from not making the application restart with e.preventDefault()
	//to dispatch the fetchSearch action that requires an argument which takes in a text to search the games
	//using the textInput state then setting the textInput to black in the search bar
	function submitSearch(e){
		e.preventDefault();
		dispatch(fetchSearch(textInput));
		setTextInput('');
	}
	//this is the dispatch to clear the search games pretty much simulation going back to home
	function clearSearched(){
		dispatch({
			type: "CLEAR_SEARCHED"
		})
	}
	//You got the nav fade in style
	//if you click the logo it clears everything using the onClick function using dispatch CLEAR_SEARCHED
	//the input in the form has a value that is set to textInput also has an onChange={inputHandler}
	//that changes the input value
	//the form has the button onClick to submit search
	return(
		<StyledNav variants={fadeIn} initial="hidden" animate="show">
			<Logo onClick={clearSearched}>
				<img src={logo} alt="logo"/>
				<h1>Flame</h1>
			</Logo>
			<form className='search' >
				<input value={textInput} onChange={inputHandler} type="text" placeholder="&quot;Cyberpunk 2077&quot;"/>
				<button onClick={submitSearch} type="submit">Submit</button>
			</form>
		</StyledNav>
	);
}

//styles for the nav
const StyledNav = styled(motion.nav)`
	padding: 3rem 5rem;
	text-align: center;
	input{
		width: 30%;
		font-size: 1.5rem;
		padding: 0.5rem;
		border: none;
		margin-top: 1rem;
		box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
		outline: none;

	}
	button {
		font-size: 1.5rem;
		border: none;
		padding: 0.5rem 2rem;
		cursor: pointer;
		background: #ff7676;
		color: white;
	}
`

const Logo = styled(motion.div)`
	display: flex;
	justify-content: center;
	padding: 1rem;
	cursor: pointer;
	img{
		height: 2rem;
		width: 2rem;
	}
`

export default Nav;