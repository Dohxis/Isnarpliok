import React, {Component} from 'react'
import {observer} from 'mobx-react'
import * as firebase from 'firebase'
import {browserHistory} from 'react-router'
import { Grid, Button, Image, TextArea } from 'semantic-ui-react'
import './style.css';

import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/github';
import 'brace/mode/javascript';
import 'brace/theme/cobalt';

import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';

import Tasks from "./Tasks.js";

@observer
class Test extends Component {

	constructor() {
		super();
		this.state = { code: '', output: '' };
	}

	componentWillMount(){
	    const user = firebase.database().ref().child('users/' + localStorage.getItem('id_auth') + '/active');
	    user.on('value', snap => {
	      if(!snap.val())
	      	browserHistory.push('/app/user/' + localStorage.getItem('id_auth'));
	    });
	}

	onChange(i, value, tab, ev) {
		console.log(arguments);
	}

	onTabChange(i, value, tab, ev) {
		//console.log(arguments);
	}

	onTabActive(tab) {
		//console.log(arguments);
	}

	onCodeChange(newValue) {
		this.state.code = newValue;
	}

	onRun() {
		var codeToEval = this.state.code.replace(/console.log/g, "window.store.updateCode");
		this.props.route.store.code = '';
		eval(codeToEval);
	}

	onSubmit() {
		alert('TODO: check if task is done');
	}

	render(){


		return (
			<div>
				<Grid columns={2}>
					<Grid.Row className="ide-grid-row0">
						<Grid.Column>
							<AceEditor
								width="100%"
								height="calc(100vh - 70px)"
								mode="javascript"
								onChange={this.onCodeChange.bind(this)}
								theme="cobalt"
                                fontSize={18}
                                showPrintMargin={true}
                                highlightActiveLine={true}
								name="46512546"
								editorProps={{$blockScrolling: true}}
								className="code-editor"
								value={this.state.code}
							/>
						</Grid.Column>

						<Grid.Column>
							<Tabs onChange={this.onChange} initialSelectedIndex={0} justified>
				        <Tab value="pane-1" label="Task" onActive={this.onActive}>
							<Tasks/>
						</Tab>

				        <Tab value="pane-2" label="Terminal">
                            <AceEditor
                                width="100%"
                                height="calc(100vh)"
                                mode="javascript"
                                theme="cobalt"
                                fontSize={18}
                                showPrintMargin={true}
                                highlightActiveLine={true}
                                name="new"
                                showGutter={false}
                                editorProps={{$blockScrolling: true}}
                                className="code-editor"
                                readOnly={true}
								value={this.props.route.store.code}
                            />
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
