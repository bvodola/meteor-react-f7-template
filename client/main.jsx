import 'react-hot-loader/patch';
import { AppContainer } from 'react-hot-loader';
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import App, { Routes } from '../imports/ui/App.jsx';

import 'framework7/dist/css/framework7.material.min.css';
import 'framework7/dist/css/framework7.material.colors.min.css';
// import 'framework7/dist/css/framework7.ios.min.css';
// import 'framework7/dist/css/framework7.ios.colors.min.css';

Meteor.startup(() => {

	let enableHMR = true;

	// If the Hot Module Replacement is enabled
	// gadicc:ecmascript-hot@=2.0.0-beta.6
	if(enableHMR) {
		render(<AppContainer><App /></AppContainer>, document.getElementById('root'));

		if (module.hot) {
			module.hot.accept('../imports/ui/App.jsx', () => {
				const NextApp = require('../imports/ui/App.jsx').default;
				render(<AppContainer><NextApp /></AppContainer>, document.getElementById('root'));
			});
		}

	}

	// If the Hot Module Replacement is not enabled
	else {
		render(<App />, document.getElementById('root'));
	}

});
