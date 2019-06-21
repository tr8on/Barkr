import React , { Component } from 'react';
import axios from "axios";
import { Redirect , Link } from "react-router-dom"


class ShowDogProfile extends Component {
	constructor () {
		super ();
		this.state = {
			doggyToShow : {} , redirect : false , img : ''
		}
		this.handleDelete = this.handleDelete.bind ( this )
	}
	
	async componentDidMount () {
		const res = await axios.get ( `http://localhost:4567/dogs/${ this.props.match.params.id }` )
		const dog = res.data.dog
		
		this.setState ( {
			doggyToShow : dog
		} )
		const apiRes = await axios.get (
			`https://dog.ceo/api/breed/${ dog.breed.toLowerCase () }/images/random` )
		const dogPic = apiRes.data.message
		console.log ( dogPic )
		this.setState ( {
			img : dogPic
		} )
		console.log ( apiRes )
	}
	
	async handleDelete () {
		await axios.delete ( `http://localhost:4567/dogs/${ this.props.match.params.id }` )
		this.setState ( {
			redirect : true
		} )
	}
	
	
	render () {
		const doggyToShow = this.state.doggyToShow;
		return ( <div className="container">
				<div>
					{ this.state.redirect ? <Redirect to='/dogs'/> : null }
					<div className="dog-profile">
						<img className="dog-pic" src={ this.state.img } alt="dogpic"></img>
						<div className="info-dog">
							<div> Name: { doggyToShow.name }</div>
							<div> Breed: { doggyToShow.breed }</div>
							<div> Age: { doggyToShow.age }</div>
							<p> Description: { doggyToShow.description }</p>
							<div> Zipcode: { doggyToShow.zipcode }</div>
							
							<Link to={ `/dog/${ doggyToShow.id }/edit` }>
								<button>Edit</button>
							</Link>
							<button onClick={ this.handleDelete }> delete</button>
						</div>
					</div>
				
				</div>
			</div> );
	}
}


export default ShowDogProfile;
