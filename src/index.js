  //Importing necessary things for react components
import React from 'react';
import ReactDOM from 'react-dom';
//Importing things from App.js to render
import App from './App';
//this is something react puts when you first install react app
import reportWebVitals from './reportWebVitals';
//Importing redux stand alone api
//createStore is the first thing you need to put to create a store and you can only put one store in an App.
//applyMiddleware is needed so you can apply redux thunk because you can't just put thunk in the redux without
//the applyMiddleware function
//compose is needed so you can apply severeal store enhancers(i.e. stuff like thunk and the redux devtools)
import {createStore, applyMiddleware, compose} from 'redux';
//Importing react-redux which will let me use redux with react.
//This is the first thing you need to put in react-redux so you can acess the redux stuff
import { Provider } from 'react-redux';
//Import the Reducer functions I have wrote in the reducers folder
import rootReducer from './reducers';
//Importing a middleware for redux because redux doesn't support async functions
import thunk from 'redux-thunk';
//Import BrowserRouter frrom react-router-dom. This is the first step on using react-router-dom
//which you will need to import pretty much on your index.js
import { BrowserRouter} from 'react-router-dom';
//This is holding the redux devtools so you can put more than one middleware things because
//createStore doesn't take multiple arguments.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//this is the first step on creating the store for redux using createStore
//it takes two arguments the reducer and the enhancer(stuff like thunk and redux devtools)
const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk)),
);

//Here we have Provider the redux function that has element which is store and takes in the createStore variable
//After we implement the Browswer Router from react-router-dom to make transitions without needing to refresh the pages.
//and then we have our app.
ReactDOM.render(
  <React.StrictMode>
  	<Provider store={store}>
  		<BrowserRouter>
		    <App />  		
		</BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
