import React, {Component} from 'react'


class Ingredient extends Component {
    render() {
        // console.log(this.props)
        return (
            <div> 
                <p>
                    Ingredient:{this.props.topping.name}
                </p>
                <button onClick={() => this.props.add(this.props.topping)} >Add to burger</button>
                        
            </div>

        )
    }
}

export default Ingredient