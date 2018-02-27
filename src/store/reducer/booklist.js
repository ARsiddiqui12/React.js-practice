import React,{Component} from 'react';
import { connect } from 'react-redux';
class BookList extends Component{


	RenderList()
	{

		return this.props.books.map((book)=>{


			return(


				<li key={book.title}>{book.title}</li>


				)


		})


	}



	render()
	{


		return(


		<ul>

		{this.RenderList()}

		</ul>


		)





	}


}

function mapStateToProps(state)
{

	return{

		books:state.books

	}

}


export default connect(mapStateToProps)(BookList)