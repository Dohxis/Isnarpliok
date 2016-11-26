import React, {Component} from 'react';
import { Image, Card, Progress, Grid, Table, Header, Rating, Menu, Segment, Divider, Button, Icon } from 'semantic-ui-react'
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';
import GithubActivity from '../../components/GithubActivity';
import "./User.css";

class User extends Component {
	constructor(){
	   super();
	   this.state = {
		   user_data: {}
	   }
	}

	continueCourse() {
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

	getHistory(){
		return(
			<Table celled padded>
				<Table.Header>
					<Table.Row>
					  <Table.HeaderCell singleLine>Evidence Rating</Table.HeaderCell>
					  <Table.HeaderCell>Efficiency</Table.HeaderCell>
					  <Table.HeaderCell>Language</Table.HeaderCell>
					  <Table.HeaderCell>Task</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					<Table.Row>
					  <Table.Cell>
						<Header as='h2' textAlign='center'>18/20</Header>
					  </Table.Cell>
					  <Table.Cell>
						<Rating icon='star' rating={4} maxRating={5} />
					  </Table.Cell>
					  <Table.Cell singleLine>JavaScript</Table.Cell>
					  <Table.Cell>
						Create an application for simple addition and subtraction
					  </Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
		)
	}

	render(){
		console.log(this.state.user_data);
		var _this = this;
		return (
			<div className="App">
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
									<div className="extra-attributes user-level"><Icon color="black" name="user empty star" /><b>Level </b> 3</div>
									<div className="extra-attributes user-since"><Icon color="black" name="user checked calendar" /><b>User since </b> 2016-13-84 </div>
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
									<center><Image size="small" src="/js.png" /></center>
									<Button onClick={this.continueCourse.bind(this)} className="user_continue" basic color='green'>Continue <b>JavaScript</b> course</Button>
								</Grid.Column>
								<Grid.Column width={4}>
									<center><Image className="image-grayscale" size="small" src="/python.png" /></center>
									<Button disabled className="user_start-course" basic color='grey'>Start <b>Python</b> course</Button>
								</Grid.Column>
								<Grid.Column width={4}>
									<center><Image className="image-grayscale" size="small" src="/cpp.png" /></center>
									<Button disabled className="user_start-course" basic color='grey'>Start <b>C++</b> course</Button>
								</Grid.Column>
								<Grid.Column width={4}>
									<center><Image className="image-grayscale" size="small" src="/java.png" /></center>
									<Button disabled className="user_start-course" basic color='grey'>Start <b>Java</b> course</Button>
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