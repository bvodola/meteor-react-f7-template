import 'react-hot-loader/patch';
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import App, { Routes } from '../imports/ui/App.jsx';
import { AppContainer } from 'react-hot-loader';

import 'framework7/dist/css/framework7.material.min.css';
import 'framework7/dist/css/framework7.material.colors.min.css';


Meteor.startup(() => {

	let enableHMR = true;

	// If the Hot Module Replacement is enabled
	if(enableHMR) {
		render(<AppContainer><App /></AppContainer>, document.getElementById('app'));

		if (module.hot) {
			module.hot.accept('../imports/ui/App.jsx', () => {
				const NextApp = require('../imports/ui/App.jsx').default;
				render(<AppContainer><NextApp /></AppContainer>, document.getElementById('app'));
			});
		}

	}

	// If the Hot Module Replacement is not enabled
	else {
		render(<App />, document.getElementById('app'));
	}

});
