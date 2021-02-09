import React from 'react'
import Ingredient from './Ingredient'



function IngredientList(props) {
    console.log(props)



    return (
        <div >
            <ul>
                {props.ingredients[0].map((ingredient, index) => (

                    <li onClick={props.addTops} ><Ingredient  topping={ingredient} key={index} /> </li>
                ))}

            </ul>

        </div>
    )
}

export default IngredientList