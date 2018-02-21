import React, {Component} from 'react';
import Counter from './Counter';
import Forms from './Forms';
class Events extends Component{

constructor(props)
{
	super(props);

	this.state = {

		counter:0 

	} 

	//this.clickHandler = this.clickHandler.bind(this);
	this.incrementCounter = this.incrementCounter.bind(this);
	this.decrementCounter = this.decrementCounter.bind(this);

}

clickHandler(msg){

this.setState({
	counter:this.state.counter + 1
})

console.log("msg",msg);
	
}



incrementCounter()
{

this.setState({

	counter:this.state.counter + 1

})

}

decrementCounter()
{

this.setState({

	counter:this.state.counter - 1

})

}







render(){


return (


	<div>
	{/*<Counter counter={this.state.counter} increment={this.incrementCounter} decrement={this.decrementCounter}/>*/}
	<Forms />
	</div>


	)


}





}

export default Events;