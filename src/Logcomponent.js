import React,{Component} from 'react';

class Logcomponent extends Component{

constructor(props)
{

	super(props);

	console.log("Constructor Method");

}

componentWillMount()
{

	console.log("Component will mount method");
}

componentWillReceiveProps(nextprops)
{

	console.log("componentWillRecieveProps :",nextprops);

}

shouldComponentUpdate(newprops,newstate)
{

	console.log("shouldComponentUpdate");

	console.log("new props", newprops);

	console.log("new state", newstate);

	return true;

}

componentWillUpdate(newprops,newstate)
{

console.log("componentWillUpdate");

console.log("new props", newprops);

	console.log("new state", newstate);

}
render()
{


	return (

		<h1>{this.props.time}</h1>

		)


}

componentDidUpdate(newprops,newstate){

console.log("componenetdidmount");
console.log("new props", newprops);

	console.log("new state", newstate);
}


}


export default Logcomponent;