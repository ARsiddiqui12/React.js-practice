import React,{Component} from 'react';
import {
  Link
} from 'react-router-dom';
class About extends Component{



redirect()
{


	console.log("hello world");

	this.props.history.push('contact/12');


}

render()
{


return (

	<div>
	<h1>About</h1>
	
	<button onClick={this.redirect.bind(this)}>Click Me</button>
	<br/>
	<Link to='contact/101'>101</Link><br/>
	<Link to='contact/102'>102</Link><br/>
	<Link to='contact/103'>103</Link>

	</div>
	)





}



}

export default About;