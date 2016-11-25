import React, {Component} from 'react'
import { Container, Header, Button, List } from 'semantic-ui-react';
import Particles from 'react-particles-js';
import './style.css';

class Landing extends Component {
	componentWillMount(){
        if(localStorage.getItem('id_auth')){
            browserHistory.push('app');
        }
    }

	login(){
		this.props.route.auth.show();
	}

	render(){
		return (
			<div className="main-container">
				<Container>

					<Header>
						<div className="logo">
							Logo
						</div>
					</Header>

					<div className="content">
						<div className="left">
							<List>
								<List.Item>
									<List.Icon name='users' />
									<List.Content>Semantic UI</List.Content>
								</List.Item>
								<List.Item>
									<List.Icon name='marker' />
									<List.Content>New York, NY</List.Content>
								</List.Item>
								<List.Item>
									<List.Icon name='mail' />
									<List.Content>
										<a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>
									</List.Content>
								</List.Item>
								<List.Item>
									<List.Icon name='linkify' />
									<List.Content>
										<a href='http://www.semantic-ui.com'>semantic-ui.com</a>
									</List.Content>
								</List.Item>
							</List>
						</div>
						<div className="right">
							Right content
							<div className="start-learning">
								<Button onClick={this.login.bind(this)}>START LEARNING</Button>
							</div>
						</div>
					</div>

					<div className="particles-background">
						<Particles />
					</div>
				</Container>
			</div>
		);
	}

}

export default Landing;