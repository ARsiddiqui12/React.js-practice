import React,{Component} from 'react';

class Contact extends Component{


render()
{
let users = {

	101:{
			name:'Hassan',
			Cell:'03123214806'
	},
	102:{
			name:'Kashif Hussain',
			Cell:'03123214806'
	},103:{
			name:'Faraz',
			Cell:'03123214806'
	}

}
let user = users[this.props.match.params.id];
return (
	<div>
	<h1>Contact Us Right Now</h1>

	User : {user.name}<br />
	Cell : {user.Cell}

	</div>
	)


}



}

export default Contact;