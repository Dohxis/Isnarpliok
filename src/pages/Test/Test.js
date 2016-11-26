import React, {Component} from 'react'
import {observer} from 'mobx-react'
import * as firebase from 'firebase'
import {browserHistory} from 'react-router'
import { Button } from 'semantic-ui-react'

import { Grid } from 'semantic-ui-react'
import './style.css';

import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/cobalt';

import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';


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
      	browserHistory.push('/app/select');
    });
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
		var codeToEval = this.state.code;
		
		codeToEval = codeToEval.replace(/console.log/g, "window.store.updateCode");
		
		window.store.code = '';
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
							/>
						</Grid.Column>
						<Grid.Column>
							<Tabs onChange={this.onTabChange} initialSelectedIndex={0} justified>
				        <Tab value="pane-1" label="Task" onActive={this.onTabActive}>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque aliquam quam vel dolor. Nunc adipiscing. Sed quam odio, tempus ac, aliquam molestie, varius ac, tellus. Vestibulum ut nulla aliquam risus rutrum interdum. Pellentesque lorem. Curabitur sit amet erat quis risus feugiat viverra. Pellentesque augue justo, sagittis et, lacinia at, venenatis non, arcu. Nunc nec libero. In cursus dictum risus. Etiam tristique nisl a nulla. Ut a orci. Curabitur dolor nunc, egestas at, accumsan at, malesuada nec, magna.
									</p>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque aliquam quam vel dolor. Nunc adipiscing. Sed quam odio, tempus ac, aliquam molestie, varius ac, tellus. Vestibulum ut nulla aliquam risus rutrum interdum. Pellentesque lorem. Curabitur sit amet erat quis risus feugiat viverra. Pellentesque augue justo, sagittis et, lacinia at, venenatis non, arcu. Nunc nec libero. In cursus dictum risus. Etiam tristique nisl a nulla. Ut a orci. Curabitur dolor nunc, egestas at, accumsan at, malesuada nec, magna.
									</p>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque aliquam quam vel dolor. Nunc adipiscing. Sed quam odio, tempus ac, aliquam molestie, varius ac, tellus. Vestibulum ut nulla aliquam risus rutrum interdum. Pellentesque lorem. Curabitur sit amet erat quis risus feugiat viverra. Pellentesque augue justo, sagittis et, lacinia at, venenatis non, arcu. Nunc nec libero. In cursus dictum risus. Etiam tristique nisl a nulla. Ut a orci. Curabitur dolor nunc, egestas at, accumsan at, malesuada nec, magna.
									</p>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque aliquam quam vel dolor. Nunc adipiscing. Sed quam odio, tempus ac, aliquam molestie, varius ac, tellus. Vestibulum ut nulla aliquam risus rutrum interdum. Pellentesque lorem. Curabitur sit amet erat quis risus feugiat viverra. Pellentesque augue justo, sagittis et, lacinia at, venenatis non, arcu. Nunc nec libero. In cursus dictum risus. Etiam tristique nisl a nulla. Ut a orci. Curabitur dolor nunc, egestas at, accumsan at, malesuada nec, magna.
									</p>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque aliquam quam vel dolor. Nunc adipiscing. Sed quam odio, tempus ac, aliquam molestie, varius ac, tellus. Vestibulum ut nulla aliquam risus rutrum interdum. Pellentesque lorem. Curabitur sit amet erat quis risus feugiat viverra. Pellentesque augue justo, sagittis et, lacinia at, venenatis non, arcu. Nunc nec libero. In cursus dictum risus. Etiam tristique nisl a nulla. Ut a orci. Curabitur dolor nunc, egestas at, accumsan at, malesuada nec, magna.
									</p>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque aliquam quam vel dolor. Nunc adipiscing. Sed quam odio, tempus ac, aliquam molestie, varius ac, tellus. Vestibulum ut nulla aliquam risus rutrum interdum. Pellentesque lorem. Curabitur sit amet erat quis risus feugiat viverra. Pellentesque augue justo, sagittis et, lacinia at, venenatis non, arcu. Nunc nec libero. In cursus dictum risus. Etiam tristique nisl a nulla. Ut a orci. Curabitur dolor nunc, egestas at, accumsan at, malesuada nec, magna.
									</p>

                            <Button.Group fluid className="buttongroup_1">
                                <Button color="green" onClick={this.onRun.bind(this)}>Run</Button>
                                <Button.Or />
                                <Button color="teal" onClick={this.onSubmit.bind(this)}>Submit</Button>
                            </Button.Group>

								</Tab>
				        <Tab value="pane-2" label="Terminal">
                            <AceEditor
                                width="100%"
                                height="calc(100vh - 70px)"
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