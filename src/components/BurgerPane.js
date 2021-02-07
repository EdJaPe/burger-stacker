import React, { Component } from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'


class BurgerPane extends Component {
    render() {

        
        
        return(
        
            <div >
                <h1>Burger pane</h1>
               <BurgerStack stack={this.props.bunIngredients} />
               <ClearBurger clearBtn={this.props.clear}/>
            </div>
        )
    }
}
export default BurgerPane