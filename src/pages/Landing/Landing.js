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

					<Header style={{marginBottom: '10px'}}>
						<div className="land_logo">
							<Image style={{width:'64px'}} size="small" src="/logo_white.png" />
							<div className="land_title">Išnarpliok</div>
						</div>
					</Header>

					<div className="land_content">

								<List className="fcklist land_left" style={{marginBottom: '0px'}}>
									<List.Item>
										<List.Icon name='checkmark box' />
										<List.Content>Patogi programavimo mokymosi platforma</List.Content>
									</List.Item>
									<List.Item>
										<List.Icon name='checkmark box' />
										<List.Content>Pasiruošimas programavimo brandos egzaminui</List.Content>
									</List.Item>
									<List.Item>
										<List.Icon name='checkmark box' />
										<List.Content>Programavimo žinių gilinimas ir pritaikymas</List.Content>
									</List.Item>
									<List.Item>
										<List.Icon name='checkmark box' />
										<List.Content>Susipažinimas su naujomis technologijomis</List.Content>
									</List.Item>
								</List>
								<div style={{marginLeft: '0px'}} className="land_right">
									<Image src="/tolyn.png" width="64px" style={{marginLeft: '100px', marginTop: '-30px'}} /> <h3 style={{marginBottom: '40px', width: '250px', textAlign: 'center', marginTop: '2px'}}>TOBULĖK PROGRAMAVIME KARTU SU MUMIS!</h3>
								</div>
								<div style={{marginTop: '40px', width: '300px'}} className="land_start-learning">
									<Button color="orange" size="large" onClick={this.login.bind(this)}>PRADĖK MOKINTIS DABAR</Button>
								</div>
								<div className="lang_images">
									<div className="lang_images-row1">
										<Image width='100px' src='/js.png' />
										<Image width='100px' src='/python.png' />
										<Image width='100px' src='/cpp.png' />
										<Image width='100px' src='/Java.png' />
									</div>
								</div>
					</div>

					<div className="land_particles-background">
						<div></div>
					</div>
				</Container>
			</div>
		);
	}

}

export default Landing;

/*
<Particles params={
{
  "particles": {
    "number": {
      "value": 160,
      "density": {
        "enable": true,
        "value_area": 236.7442924896818
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6.413648243462092,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250,
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
} />
*/