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
    addToppings = (event) => {
        console.log(event.target)
        this.setState({name: event.target.innerText})
    }
    render(){
        return(
            <div>
                <div>
                    <IngredientList addTops={this.addToppings} ingredients={this.state.ingredientes}/>
                </div>
                <div>
                    <BurgerPane  bun={this.state.burgerIngred} clear={this.clearBurger}/>
                </div>

            </div>
        )
    }

}
export default BurgerStacker