import React, { Component } from 'react'



class ClearBurger extends Component {
    render() {

       
        
        return(
            <div>
                <button onClick={this.props.clearBtn} >Clear Stack</button>
            </div>
        )
    }
}
export default ClearBurger