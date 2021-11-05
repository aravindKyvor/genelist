
import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Header from './components/Navbar';
import Single from './components/Single'
import Search from './components/Searchbar';

import Searchposts from './components/admin/Searchposts';
function App(){
	
	return(
		<div>

<Router>
     <Header />
			
			<Switch>
               
			
			    <Route exact path="/searchposts" component={Searchposts} />
				<Route exact path='/posts/:postID' component={Single} />
				<Route path="/" component={Search} /> 
			</Switch>
		
	</Router>

		</div>

	)
}

export default App