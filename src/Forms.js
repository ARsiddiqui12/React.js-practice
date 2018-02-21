import React,{Component} from 'react';

class Forms extends Component{

constructor(props)
{

super(props);

this.state = {

	username:'',
	allArray:[],
	radioGroup:{

		php:true,
		asp:false,
		android:false

	},
	checkboxGroup:{

		AngularJs:false,
		ExpressJs:true,
		MongoDB:false,
		NodeJs:false

	},selectMenu:'node'


}

this.formHandler = this.formHandler.bind(this);
this.addUser = this.addUser.bind(this);
this.randioHandler = this.randioHandler.bind(this);
this.cheboxHandler = this.cheboxHandler.bind(this);
this.selectHandler = this.selectHandler.bind(this);
this.getUsername = this.getUsername.bind(this);
}

formHandler(event)
{

	this.setState({
		username:event.target.value
	})

}

addUser()
{

let user = this.state.allArray;

user.push(this.state.username);

this.setState({

	allArray:user,
	username:''
	
})

console.log(this.state.allArray);

}

randioHandler(event)
{

console.log(event.target.value);

let radioGroup = this.state.radioGroup;

for(var key in radioGroup)
{
	radioGroup[key]=false
}

radioGroup[event.target.value] = event.target.checked;

this.setState({

	radioGroup:radioGroup
})

}

cheboxHandler(event)
{

console.log(event.target.value);

let checkboxGroup = this.state.checkboxGroup;


checkboxGroup[event.target.value]=event.target.checked;

this.setState({

	checkboxGroup:checkboxGroup

})

}

selectHandler(event)
{

console.log(event.target.value);

this.setState({

	selectMenu:event.target.value

})


}

getUsername()
{

console.log(this.refs.refusername.value);

}

render()
{

	return (

		<div>

		<h1>Registration Form</h1>
		
		<input type='text' name="username" value={this.state.username} onChange={this.formHandler} />
		<p>{this.state.username}</p>

		<button onClick={this.addUser}>Add User</button>

		<br />
		<br />
		Php <input type='radio' name='devcat' value='php' checked={this.state.radioGroup['php']} onChange={this.randioHandler} />

		<br /><br />

		Asp <input type='radio' name='devcat' value='asp' checked={this.state.radioGroup['asp']} onChange={this.randioHandler} /><br /><br />

		Android <input type='radio' name='devcat' value='android' checked={this.state.radioGroup['android']} onChange={this.randioHandler} />
		<br />
		<br />
		<hr />
		Angular js <input type='checkbox' name='mean' value='AngularJs' checked={this.state.checkboxGroup['AngularJs']} onChange={this.cheboxHandler} />
		<br />
		<br />
		Express Js <input type='checkbox' name='mean' value='ExpressJs' checked={this.state.checkboxGroup['ExpressJs']} onChange={this.cheboxHandler} />
		<br />
		<br />
		Mongo DB  <input type='checkbox' name='mean' value='MongoDB' checked={this.state.checkboxGroup['MongoDB']} onChange={this.cheboxHandler} />
		<br />
		<br />
		Node Js  <input type='checkbox' name='mean' value='NodeJs' checked={this.state.checkboxGroup['NodeJs']} onChange={this.cheboxHandler} />
		<hr />

		<select value={this.state.selectMenu} onChange={this.selectHandler}>
		<option value='angular'>Angular</option>
		<option value='node'>Node</option>
		<option value='express'>Express</option>
		</select>
		<br />
		<br />
		<hr />

		<input type='text' ref='refusername' />
		<button onClick={this.getUsername}>Get Username</button>

		</div>

		)

}



}


export default Forms;