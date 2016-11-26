import React, {Component} from 'react';
import { Image } from 'semantic-ui-react'
import { browserHistory } from 'react-router';

class User extends Component {
	render(){
		return (
			<div className="App">
				{this.props.params.id}
			</div>
		)
	}

}

export default User;
