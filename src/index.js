import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';

import App from './components/App/App';

ReactDOM.render(
	<BrowserRouter>
		<Route path='/'>
			<App />
		</Route>
	</BrowserRouter>,
	document.getElementById('root')
);
