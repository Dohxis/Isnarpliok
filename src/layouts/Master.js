import React, {Component} from 'react'

class Master extends Component {

    render(){
        return (
            <div>
                {this.props.children}
            </div>
        );
    }

}

export default Master;