import React from 'react';
import {
  Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import Services from './Services';
import Contact from './Contact';
import History from './History';

const CustomRoute = () =>
(

	<Router history={History}> 

		<div>
			<Navbar />
			<Route exact path='/' component={Home}/>
			<Route path='/about' component={About}/>
			<Route path='/services' component={Services}/>
			<Route path='/contact/:id' component={Contact}/>

		


		</div>

	</Router>


)

export default CustomRoute;