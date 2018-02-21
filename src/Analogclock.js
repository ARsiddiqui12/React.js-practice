import React from 'react';

function Analogclock(props)
{


	let time = new Date(props.time);

	const hourHand={

		color:'red'

	}

	const minuteHand={

		color:'green'

	}

	const secondHand={

		color:'blue'

	}

	return (

		

		<div>
		<h1>Analogclock</h1>
		<div style={hourHand}></div>
		<div style={minuteHand}></div>
		<div style={secondHand}></div>

		</div>

		)

}

export default Analogclock;