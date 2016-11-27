import React, {Component} from 'react';
import { Card, Grid, Divider, Icon } from 'semantic-ui-react'
import { browserHistory } from 'react-router';
import * as firebase from 'firebase';
import GithubActivity from '../../components/GithubActivity';
import "./User.css";
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import moment from 'moment';

class User extends Component {
	constructor(){
	   super();
	   this.state = {
		   user_data: {},
		   active: true,
		   showLang: false
	   }
	}

	continueCourse() {
		browserHistory.push('/app');
	}
	
	start() {
		firebase.database().ref().child('users/' + this.props.route.store.userID + '/active').set(true);
		browserHistory.push('/app');
	}

	componentDidMount(){
		const user = firebase.database().ref().child('users/' + this.props.params.id);
		user.on('value', snap => {
			this.setState({
				user_data: snap.val()
			});
		});
	}

	showModal(){
		if(this.state.active)
			return (<Modal open={true}>
			<Modal.Header>Select a Photo</Modal.Header>
			<Modal.Content image>
				<Image wrapped size='medium' src='http://semantic-ui.com/images/avatar2/large/rachel.png' />
				<Modal.Description>
					<Header>Default Profile Image</Header>
					<p>We've found the following gravatar image associated with your e-mail address.</p>
					<p>Is it okay to use this photo?</p>
				</Modal.Description>
			</Modal.Content>
		</Modal>);
	}

	render(){
		var _this = this;

		return (
			<div className="App">
				{this.showModal.bind(this)}
				<Modal ref="OutlineModel">Hello</Modal>
				<Card fluid className="user_fluid">
				  <Card.Content className="card-prefix">
						<Grid columns={2}>
							<Grid.Row>
								<Grid.Column width={3}>
									<center>
										<Image className="user_image" size='small' src={_this.state.user_data.identity? _this.state.user_data.identity.picture:"/logo.png"} />
									</center>
								</Grid.Column>
								<Grid.Column width={4}>
									<div className="user-name"><b> {_this.state.user_data.identity? _this.state.user_data.identity.nickname: "spaghetti"}</b></div>
									<div className="extra-attributes user-level"><Icon color="black" name="user empty star" />
										<b>Lygis </b>
										{_this.state.user_data.identity? _this.state.user_data.identity.level:""}
									</div>
									<div className="extra-attributes user-since"><Icon color="black" name="user checked calendar" />
										<b>Užsiregistravo </b>
										{_this.state.user_data.identity? moment(_this.state.user_data.identity.created_at).format("YYYY-MM-DD") :""}
									</div>
								</Grid.Column>
								<Grid.Column style={{marginTop: '20px'}} className="user_social-media" width={9}>
									<GithubActivity />
								</Grid.Column>
							</Grid.Row>
						</Grid>
						<Divider />
						<Grid columns={4} className="user_languages">
							<Grid.Row>
								<Grid.Column width={4}>
									<center><Image className={!_this.state.user_data.active? 'image-grayscale' : '' } size="small" src="/js.png" /></center>
									{_this.state.user_data.active? <Button onClick={this.continueCourse.bind(this)} className="user_continue" basic color='green'>Tęsti <b>JavaScript</b> kursą</Button> : <Button onClick={this.start.bind(this)} className="user_continue" basic color='green'>Pradėti <b>JavaScript</b> kursą</Button> }
								 </Grid.Column>
								<Grid.Column width={4}>
									<center><Image className="image-grayscale" size="small" src="/python.png" /></center>
									<Button disabled className="user_start-course" basic color='grey'>Pradėti <b>Python</b> kursą</Button>
								</Grid.Column>
								<Grid.Column width={4}>
									<center><Image className="image-grayscale" size="small" src="/cpp.png" /></center>
									<Button disabled className="user_start-course" basic color='grey'>Pradėti <b>C++</b> kursą</Button>
								</Grid.Column>
								<Grid.Column width={4}>
									<center><Image className="image-grayscale" size="small" src="/Java.png" /></center>
									<Button disabled className="user_start-course" basic color='grey'>Pradėti <b>Java</b> kursą</Button>
								</Grid.Column>
							</Grid.Row>
						</Grid>
				  </Card.Content>
				</Card>
			</div>
		)
	}

}

export default User;

/*

				<Menu pointing>
					<Menu.Item className="history-prefix" name='history' active={true}/>
				</Menu>
				<Segment>
					{_this.getHistory()}
				</Segment>
*/
