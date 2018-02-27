import React,{Component} from 'react';
import {
  Link
} from 'react-router-dom';
class Navbar extends Component{


render()
{

	return(

		<div>

		<Link to='/'>Home</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
			<Link to='/about'>About</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
			<Link to='/services'>Services</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
			<Link to='/contact'>Contact Us</Link>
			<hr />


		</div>



		)




}


}

export default Navbar;