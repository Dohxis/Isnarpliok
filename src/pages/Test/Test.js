import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'
import {browserHistory} from 'react-router'

class Test extends Component {

	login(){
		this.props.route.auth.show();

		var self = this;
		this.props.route.auth.on("authenticated", function(authResult) {
			this.getProfile(authResult.idToken, function(error, profile) {
				const id = new Buffer(profile.user_id).toString('base64');
				self.props.route.store.login(profile, id);
				localStorage.setItem('id_auth', id);
				browserHistory.push('/app');
				self.props.route.auth.hide();
			});
		});

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