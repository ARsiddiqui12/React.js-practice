import React, {Component} from 'react';
import Stateless from './Stateless';
import Analogclock from './Analogclock';
import Logcomponent from './Logcomponent';
import Events from './Events';
class Digitalclock extends Component{

constructor(props)
{
	super(props); // its a method and pass props

	this.state = {

		currentTime:new Date().toLocaleString(),
		counter:0

	}

	this.updateTime();
}

updateTime()
{

	setInterval(()=>{

		this.setState({

			currentTime:new Date().toLocaleString(),
			counter:this.state.counter + 1

		});

	},1000);

}

render()
{

return (
	<div>
	
	<Events />

	</div>
	)

}



}

export default Digitalclock;