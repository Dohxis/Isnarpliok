import React, {Component} from 'react'
import { Container, Header, Button, List } from 'semantic-ui-react';
import Particles from 'react-particles-js';
import './style.css';
import { browserHistory } from 'react-router';

class Landing extends Component {
	componentWillMount(){
        if(localStorage.getItem('id_auth')){
            browserHistory.push('app');
        }
    }

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
			<div className="land_main-container">
				<Container>

					<Header>
						<div className="land_logo">
							Logo
						</div>
					</Header>

					<div className="land_content">
						<div className="land_left">
							<List>
								<List.Item>
									<List.Icon name='square outline' />
									<List.Content>Semantic UI</List.Content>
								</List.Item>
								<List.Item>
									<List.Icon name='square outline' />
									<List.Content>New York, NY</List.Content>
								</List.Item>
								<List.Item>
									<List.Icon name='square outline' />
									<List.Content>New York, NY</List.Content>
								</List.Item>
								<List.Item>
									<List.Icon name='square outline' />
									<List.Content>New York, NY</List.Content>
								</List.Item>
							</List>
						</div>
						<div className="land_right">
							Right content
							<div className="land_start-learning">
								<Button onClick={this.login.bind(this)}>START LEARNING</Button>
							</div>
						</div>
					</div>

					<div className="land_particles-background">
						<Particles />
					</div>
				</Container>
			</div>
		);
	}

}

export default Landing;