import React,{Component} from 'react';

class Counter extends Component{


	render(){


		return (


			<div>

			<h1>Counter</h1>

			<h1>{this.props.counter}</h1>

			<h3><button onClick={this.props.increment}>+</button>
			<button onClick={this.props.decrement}>-</button></h3>

			</div>

			)

	}


}

export default Counter;