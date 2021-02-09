import React, { Component } from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'




function BurgerPane (props) {

    return(
    
        <div >
            <h1>Burger pane</h1>
           <BurgerStack stack={props.bunIngredients} />
           <ClearBurger clearBtn={props.clear}/>
        </div>
    )


}        
        
    
export default BurgerPane