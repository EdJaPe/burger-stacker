import React, { useState } from 'react';

import IngredientList from  './IngredientList'
import BurgerPane from './BurgerPane'
import ingredientsData from './ingredientsData'

// class BurgerStacker extends Component {
    // state = {
    //     ingredientes: [ingredientsData],
    //     burgerIngred: []            
    // }
    // clearBurger = () =>{
    //     //clear burger ingredients
    //     this.setState({burgerIngred:[]})
    // }
    // addToppings = (topping) => {
    //    console.log( topping)
    //     let ingredCopy = this.state.burgerIngred
    //     ingredCopy.push(topping)
    //     this.setState({burgerIngred:ingredCopy.reverse() })
    
    // render(){
function BurgerStacker () {
    // const [ingredientes, setIngred] = useState(ingredientsData);
    let ingredientes = [ingredientsData]
    const [burgerIngred, setBurgerIngred] = useState([])

    const clearBurger = () => {
        setBurgerIngred([])
    }
    const addToppings = (topping) => {
        console.log(topping)
        setBurgerIngred([{
            name:topping.target.innerText,
            color:topping.target.style.backgroundColor
        }, ...burgerIngred])
        // console.log(topping)
        // let ingredCopy = burgerIngred
        // ingredCopy.push(topping)
        // setBurgerIngred(ingredCopy.reverse())
    }
    
        return(
            <div>
                <div>
                    <IngredientList addTops={addToppings} ingredients={ingredientes}/>
                </div>
                <div>
                    <BurgerPane  bunIngredients={burgerIngred} clear={clearBurger}/>
                </div>

            </div>
        )
    }


export default BurgerStacker