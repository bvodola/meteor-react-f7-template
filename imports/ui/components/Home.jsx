import React from 'react';
import {Page, ContentBlock, Navbar} from 'framework7-react';

const Home = () => (
	<Page>
		<Navbar title="Home" backLink="Back" sliding />
		<ContentBlock inner>
    	Home Component Fodelão
		</ContentBlock>
  </Page>
);

export default Home;
