import React, { Component } from 'react'
import Ingredient from './Ingredient'

class BurgerStack extends Component {
    render() {

       
        return(
            <div >
                {this.props.stack.map((top, key) => (
                    <h4 key={key}>{top.name}</h4>
                ))}
            </div>
        )
    }
}
export default BurgerStack
