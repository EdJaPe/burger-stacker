import React, {Component} from 'react'


function Ingredient (props) {


    return (
        <div> 
            <span style={{backgroundColor:props.topping.color}} >
                Ingredient:{props.topping.name}
            </span>
            
                    
        </div>
    
    )

}
    

export default Ingredient