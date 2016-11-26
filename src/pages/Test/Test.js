import React, {Component} from 'react'
import {observer} from 'mobx-react'

@observer
class Test extends Component {

	componentWillMount(){
		if(this.props.route.store.user.active){
			console.log("hey");
		} else {
			console.log("lol");
		}
	}

	render(){
		return (
			<div>
				IDE
			</div>
		);
	}

}

export default Test;