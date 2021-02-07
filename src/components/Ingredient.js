import React, {Component} from 'react'


class Ingredient extends Component {
    render() {
        // console.log(this.props)
        return (
            <p>
                Ingredient:{this.props.topping.name}
            </p>
        )
    }
}

export default Ingredient