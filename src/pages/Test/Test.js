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

@observer
class Test extends Component {

	componentWillMount(){
        const user = firebase.database().ref().child('users/' + localStorage.getItem('id_auth') + '/active');
        user.on('value', snap => {
            if(!snap.val())
                browserHistory.push('/app/select');
        });
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
							asdasdasdasd
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}

}

export default Test;