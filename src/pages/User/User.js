import React, {Component} from 'react';
import { Image, Card, Button, Progress, Grid, Table, Header, Rating, Menu, Segment} from 'semantic-ui-react'
import { browserHistory } from 'react-router';
import * as firebase from 'firebase';
import "./User.css";

class User extends Component {
	constructor(){
       super();
       this.state = {
           user_data: {}
       }
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
					  <Table.HeaderCell singleLine>Completion</Table.HeaderCell>
					  <Table.HeaderCell singleLine>Rating</Table.HeaderCell>
					  <Table.HeaderCell singleLine>Language</Table.HeaderCell>
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
				<div>
					<Card fluid>
				      <Card.Content className="card-prefix">
						  <Grid columns={2}>
							    <Grid.Row>
							      <Grid.Column color="purple" width={2}>
									  <center>
										  <Image size='small' src={_this.state.user_data.identity? _this.state.user_data.identity.picture:"/logo.png"} />
									  </center>
							      </Grid.Column>
							      <Grid.Column width={13}>
									  <b> <div className="user-name"> {_this.state.user_data.identity? _this.state.user_data.identity.nickname: "spaghetti"} </div> </b>
									  <Progress color="purple" percent={30} active>
									    	Level 7
									  </Progress>
									<span>
										<span className="extra-attributes user-since"> <b> User since: </b> 2016-13-84 </span>
										<span className="extra-attributes completed-attribute"> <b> Completed: </b> 9001+ </span>
									</span>
							      </Grid.Column>
							    </Grid.Row>
							</Grid>
				      </Card.Content>
				    </Card>

					<Menu pointing>
				        <Menu.Item className="history-prefix" name='courses' active={true}/>
			        </Menu>
					<Segment>
						{_this.getHistory()}
					</Segment>
				</div>
			</div>
		)
	}

}

export default User;
