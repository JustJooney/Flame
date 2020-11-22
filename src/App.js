//Import Globalstyles which is the styled-components 
//a better way to style in react.
import GlobalStyles from './components/GlobalStyles';
//Importing the Route from react-router-dom this is the second step needed to
//go from other pages but in this case we have everything in one page.
import {Route} from 'react-router-dom';
//Importing Home and Nav from their location
import Home from './pages/Home';
import Nav from './components/Nav';

//So in this rendering we have GlobalStyles that implements the styles
//then we have nav that is rendered at the top so we can search for things
//then we have the Route which takes in a path element so we can know which
//path we are on such as / for home and /game/:id for the games we click on.
//we are not moving to different pages because for this one we are just raising
//a card that shows the games details and that's it.
function App() {
  	return (
	    <div>
	    	<GlobalStyles />
	    	<Nav/>
	    	<Route path={['/game/:id', '/']}>	
	      		<Home />	    		
	    	</Route>
	    </div>
  );
}

export default App;
