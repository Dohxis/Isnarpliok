import React, {Component} from 'react'
import { Container, Header, Button, List, Image } from 'semantic-ui-react';
import Particles from 'react-particles-js';
import { browserHistory } from 'react-router';
import './style.css';

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
				self.props.route.store.login(profile, id, true);
				localStorage.setItem('id_auth', id);
				browserHistory.push('/app');
				self.props.route.auth.hide();
			});
		});
	}

	render(){
		return (
			<div className="land_main-container">
				<Container className="land_container">

					<Header>
						<div className="land_logo">
							Logo
						</div>
					</Header>

					<div className="land_content">
						<div className="land_left">
							<div className="land_left-inner">
								<List>
									<List.Item>
										<List.Icon name='square outline' />
										<List.Content>Lorem ipsum dolor sit amet</List.Content>
									</List.Item>
									<List.Item>
										<List.Icon name='square outline' />
										<List.Content>Eum te gubergren vulputate</List.Content>
									</List.Item>
									<List.Item>
										<List.Icon name='square outline' />
										<List.Content>Iuvaret accusam aliquando</List.Content>
									</List.Item>
									<List.Item>
										<List.Icon name='square outline' />
										<List.Content>Labore vocent theophrastus</List.Content>
									</List.Item>
								</List>
							</div>
						</div>
						<div className="land_right">
							<div className="land_right-inner">
								<div className="lang_images">
									<div className="lang_images-row1">
										<Image width='80px' src='http://nodeframework.com/assets/img/js.png' />
										<Image width='80px' src='https://www.sitepoint.com/wp-content/themes/sitepoint/assets/images/icon.php.png' />
									</div>
									<div className="lang_clear"></div>
									<div className="lang_images-row2">
										<Image width='80px' src='https://zeth.net/_images/500px-Python-logo-notext.svg.png' />
										<Image width='84px' src='cpp.png' />
										<Image width='84px' src='c.png' />
									</div>
								</div>
								<div className="land_start-learning">
									<Button size="large" onClick={this.login.bind(this)}>START LEARNING</Button>
								</div>
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