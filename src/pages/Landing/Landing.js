import React, {Component} from 'react'
import { Container, Header, Button } from 'semantic-ui-react';
import Particles from 'react-particles-js';
import ParticlesParams from './particlesjs-config.json';
import './style.css';

class Landing extends Component {

	render(){
		return (
			<Container>
				<Header>
					<div className="left">
						<div className="logo">Logo</div>
						<div className="learn-to-code">LEARN TO CODE!</div>
					</div>
					<div className="right">
						<Button onClick={this.props.route.auth.show()}>START LEARNING</Button>
						<Button onClick={this.props.route.auth.show()}>LOGIN</Button>
					</div>
				</Header>

				<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
			
				<Particles params="ParticlesParams" />
			</Container>
		);
	}

}

export default Landing;