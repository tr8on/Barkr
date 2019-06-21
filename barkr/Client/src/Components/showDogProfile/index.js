import React , { Component } from 'react';
import axios from "axios";
import { Redirect , Link } from "react-router-dom"
import Box from "../DogBox";


class ShowDogProfile extends Component {
	constructor () {
		super ();
		this.state = {
			doggyToShow : {} , redirect : false , img : '',ownername:{}
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
		
		this.setState ( {
			img : dogPic
		} )
		
		const ownres = await axios.get ( `http://localhost:4567/dogs/owner/${ this.state.doggyToShow.owner_id}` )
		const owndog = ownres.data.owner
		console.log(owndog)
		this.setState ( {
			ownername: owndog
		} )
	
	
	
	
		
	}
	
	
	
	async handleDelete () {
		await axios.delete ( `http://localhost:4567/dogs/${ this.props.match.params.id }` )
		this.setState ( {
			redirect : true
		} )
	}
	
	
	render () {
		const doggyToShow = this.state.doggyToShow;
		const owner = this.state.ownername;
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
						<div className="owner-info">
							Owner:{ owner.name }
							<br/>
							Phone:{owner.phone}
							<br/>
							Email:{owner.email}
						</div>
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
