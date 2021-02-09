import React from 'react'



function ClearBurger (props) {

    return(
        <div>
            <button onClick={props.clearBtn} >Clear Stack</button>
        </div>
    )

}
   
export default ClearBurger