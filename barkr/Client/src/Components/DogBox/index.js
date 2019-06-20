import React , { Component } from 'react';
import axios from "axios";

class DogBox extends Component{
    constructor(props){
        super(props)
        this.state={
            dogPic:""
        }
    }
        
    async componentDidMount(){
        const apiRes = await axios.get(`https://dog.ceo/api/breed/${this.props.breed.toLowerCase()}/images/random`)
                const dogPic = apiRes.data.message
                console.log(dogPic)
                this.setState({
                    dogPic:dogPic
                }) 
    };
        

    
     
                

		render ()
		
		{		
	      
				return ( 
                // <div className="box">
				// 	<div onClick={ this.handleOpenModal }>
				// 		<img className="img" src={ game.image.original_url } alt=""/>
				// 	</div>  
					
                // </div> 
                <div className="box">
                    <img src={this.state.dogPic}/>
                    <h1>{this.props.name} , {this.props.age}</h1> 
                    <h3>{this.props.breed}</h3> 
                </div>
                )
			}
	}

export default DogBox




