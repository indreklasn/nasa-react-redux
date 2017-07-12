import React from 'react'; // import the main react dependency
import ReactDOM from 'react-dom'; // import reactDOM
import App from './app/App'; // import the main app component

import './assets/stylesheets/styles.scss';

ReactDOM.render(
	<App />, // render our App component
	document.getElementById('root') // and mount it to our #root element
);
