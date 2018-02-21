import React,{Component} from 'react';

class Method extends Component{

myImsaccountlink()
{

	return 'http://ims.quran10.com';

}

myImsaccounttext()
{

	return 'Abdul Rehman Sup';

}

render()
{

	return (

			<div>
				<p>My Account is : <a href={this.myImsaccountlink()}>{this.myImsaccounttext()}</a></p>
			</div>

		)


}


}


export default Method;