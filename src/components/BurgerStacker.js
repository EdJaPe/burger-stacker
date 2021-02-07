import React, { Component } from 'react';

import IngredientList from  './IngredientList'
import BurgerPane from './BurgerPane'
import ingredientsData from './ingredientsData'

class BurgerStacker extends Component {
    
    state = {
        ingredientes: [ingredientsData],
        burgerIngred: []            
    }
    clearBurger = () =>{
        //clear burger ingredients
        this.setState({burgerIngred:[]})
    }
    addToppings = (topping) => {
       console.log( topping)
        let ingredCopy = this.state.burgerIngred
        ingredCopy.push(topping)
        this.setState({burgerIngred:ingredCopy.reverse() })
    }
    render(){
        return(
            <div>
                <div>
                    <IngredientList addTops={this.addToppings} ingredients={this.state.ingredientes}/>
                </div>
                <div>
                    <BurgerPane  bunIngredients={this.state.burgerIngred} clear={this.clearBurger}/>
                </div>

            </div>
        )
    }

}
export default BurgerStacker