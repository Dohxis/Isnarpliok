import React, {Component} from 'react'
import {observer} from 'mobx-react'
import * as firebase from 'firebase'
import {browserHistory} from 'react-router'

import { Grid, Image, TextArea } from 'semantic-ui-react'
import './style.css';

import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/github';

import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';

import Tasks from "./Tasks.js";

@observer
class Test extends Component {

	componentWillMount(){
        const user = firebase.database().ref().child('users/' + localStorage.getItem('id_auth') + '/active');
        user.on('value', snap => {
            if(!snap.val())
                browserHistory.push('/app/select');
        });
	}

	onChange(i, value, tab, ev) {
		console.log(arguments);
	}

	onActive(tab) {
		console.log(arguments);
	}

	render(){


		function onChange(newValue) {
		  console.log('change',newValue);
		}

		return (
			<div>
				<Grid columns={2}>
					<Grid.Row className="ide-grid-row0">
						<Grid.Column>
							<AceEditor
								width="100%"
								height="calc(100vh - 70px)"
								mode="javascript"
								theme="github"
								onChange={onChange}
								name="46512546"
								editorProps={{$blockScrolling: true}}
								className="code-editor"
								/>
						</Grid.Column>
						<Grid.Column>
							<Tabs onChange={this.onChange} initialSelectedIndex={0} justified>
				        <Tab value="pane-1" label="Task" onActive={this.onActive}>
							<Tasks/>
						</Tab>
				        <Tab value="pane-2" label="Terminal">
									<p>
										Nulla facilisi. Nunc volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut sit amet orci vel mauris blandit vehicula. Nullam quis enim. Integer dignissim viverra velit. Curabitur in odio. In hac habitasse platea dictumst. Ut consequat, tellus eu volutpat varius, justo orci elementum dolor, sed imperdiet nulla tellus ut diam. Vestibulum ipsum ante, malesuada quis, tempus ac, placerat sit amet, elit.
									</p>
									<p>
										Nulla facilisi. Nunc volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut sit amet orci vel mauris blandit vehicula. Nullam quis enim. Integer dignissim viverra velit. Curabitur in odio. In hac habitasse platea dictumst. Ut consequat, tellus eu volutpat varius, justo orci elementum dolor, sed imperdiet nulla tellus ut diam. Vestibulum ipsum ante, malesuada quis, tempus ac, placerat sit amet, elit.
									</p>
									<p>
										Nulla facilisi. Nunc volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut sit amet orci vel mauris blandit vehicula. Nullam quis enim. Integer dignissim viverra velit. Curabitur in odio. In hac habitasse platea dictumst. Ut consequat, tellus eu volutpat varius, justo orci elementum dolor, sed imperdiet nulla tellus ut diam. Vestibulum ipsum ante, malesuada quis, tempus ac, placerat sit amet, elit.
									</p>
									<p>
										Nulla facilisi. Nunc volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut sit amet orci vel mauris blandit vehicula. Nullam quis enim. Integer dignissim viverra velit. Curabitur in odio. In hac habitasse platea dictumst. Ut consequat, tellus eu volutpat varius, justo orci elementum dolor, sed imperdiet nulla tellus ut diam. Vestibulum ipsum ante, malesuada quis, tempus ac, placerat sit amet, elit.
									</p>
									<p>
										Nulla facilisi. Nunc volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut sit amet orci vel mauris blandit vehicula. Nullam quis enim. Integer dignissim viverra velit. Curabitur in odio. In hac habitasse platea dictumst. Ut consequat, tellus eu volutpat varius, justo orci elementum dolor, sed imperdiet nulla tellus ut diam. Vestibulum ipsum ante, malesuada quis, tempus ac, placerat sit amet, elit.
									</p>
									<p>
										Nulla facilisi. Nunc volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut sit amet orci vel mauris blandit vehicula. Nullam quis enim. Integer dignissim viverra velit. Curabitur in odio. In hac habitasse platea dictumst. Ut consequat, tellus eu volutpat varius, justo orci elementum dolor, sed imperdiet nulla tellus ut diam. Vestibulum ipsum ante, malesuada quis, tempus ac, placerat sit amet, elit.
									</p>
								</Tab>
				      </Tabs>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}

}

export default Test;
