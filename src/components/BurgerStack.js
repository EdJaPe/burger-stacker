import React from 'react'
import Ingredient from './Ingredient'

// class BurgerStack extends Component {
//     render() {

    function BurgerStack (props) {
        return(
            <div >
                {props.stack.map((top, key) => (
                    <h4 key={key} style={{backgroundColor:top.color}}>{top.name}</h4>
                ))}
            </div>
        )
        
        
    }       
    // }
// }
export default BurgerStack
