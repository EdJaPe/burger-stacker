import React, { Component } from 'react'
import Ingredient from './Ingredient'

class IngredientList extends Component {

   
    render() {
        console.log(this.props.ingredients)
        
        return(
            <div >
                {this.props.ingredients[0].map((ingredient, index) =>(
                    <Ingredient add={this.props.addTops} topping={ingredient} key={index}/>
                ))}
                
            </div>
        )
    }
}
export default IngredientList