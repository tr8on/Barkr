import React , { Component } from 'react'
import axios from 'axios'

class CreateOwnerFrom extends Component {

	constructor () {
		super ()
		this.state = {
			ownerArray : [] , currentOwner : 1
		}
		this.setOwner = this.setOwner.bind ( this )
		
	}
	
	async componentDidMount () {
		const res = await axios.get ( '/dogs/owners' )
		const ownerArray = res.data.owner
		this.setState ( {
			ownerArray : ownerArray
		} )
	}
	
	setOwner ( event ) {
		this.setState ( {
			currentOwner : event.currentTarget.value
		} )
	}
	
	
	render () {
		return ( <div>
			<select value={ this.state.currentOwner } onChange={ this.setOwner }>
				<option label="select an owner"/>
				{ this.state.ownerArray.map ( ( owner ) => {
					return <option value={ `${ owner.id }` }>{ `${ owner.name }` }</option>
				} ) }
			</select>
		</div> )
	}
	

}

export default CreateOwnerFrom
