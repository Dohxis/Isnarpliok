import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'

class Test extends Component {

	login(){
		this.props.route.auth.show();
	}

	render(){
		return (
			<div>
				<Button onClick={this.login.bind(this)}>Login</Button>
			</div>
		);
	}

}

export default Test;