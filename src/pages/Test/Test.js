import React, {Component} from 'react'
import {observer} from 'mobx-react'
import * as firebase from 'firebase'
import {browserHistory} from 'react-router'
import { Grid, Button, Icon } from 'semantic-ui-react'
import './style.css';

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
		this.state = { code: '// ?', output: '', lvl: '' };
	}

	componentWillMount(){
			const user = firebase.database().ref().child('users/' + localStorage.getItem('id_auth') + '/active');
			user.on('value', snap => {
				if(!snap.val())
					browserHistory.push('/app/select');
			});
			
			this.lvl = firebase.database().ref().child('users/' + localStorage.getItem('id_auth') + '/level');
	}

	componentWillMount(){
	    const user = firebase.database().ref().child('users/' + localStorage.getItem('id_auth') + '/active');
	    user.on('value', snap => {
	      if(!snap.val())
	      	browserHistory.push('/app/user/' + localStorage.getItem('id_auth'));
	    });
	}

	onChange(i, value, tab, ev) {
		//console.log(arguments);
	}

	onTabChange(i, value, tab, ev) {
		//console.log(arguments);
	}

	onTabActive(tab) {
		//console.log(arguments);
	}

	onCodeChange(newValue) {
		 // eslint-disable-next-line
		this.state.code = newValue;
	}
	
	runCode() {
		var codeToEval = this.state.code.replace(/console.log/g, "window.store.updateCode");
		this.props.route.store.code = '';
		console.log(codeToEval);
		//$( ".a:contains('Terminal')" ).click();
		// eslint-disable-next-line
		eval(codeToEval);
	}
	
	
	render(){
		
		return (
			<div>
				<Grid columns={2}>
					<Grid.Row className="ide-grid-row0">
						<Grid.Column style={{ position: 'relative', borderRight: 'solid thick #A25421' }} width={10}>
							
							<AceEditor
								width="100%"
								height="calc(100vh - 70px)"
								mode="javascript"
								onChange={this.onCodeChange.bind(this)}
								theme="cobalt"
								fontSize={18}
								showPrintMargin={false}
								highlightActiveLine={true}
								name="46512546"
								editorProps={{$blockScrolling: true}}
								className="code-editor"
								value={this.state.code}
							/>
							
							<Button color='green' onClick={this.runCode.bind(this)} style={{ position: 'absolute', top: '7px', right: '7px', zIndex: '999', marginRight: '0' }}>
								<Icon name='play' />
								Vykdyti
							</Button>
							
						</Grid.Column>
						<Grid.Column width={6}  style={{ borderStyle: 'none', borderLeft: 'solid #A25421' }}>
							<Tabs onChange={this.onTabChange} initialSelectedIndex={0} justified>
								
								<Tab value="pane-1" label="Task" onActive={this.onTabActive}>
									
									
								</Tab>
								
								<Tab value="pane-2 notGeneric" label="Terminal" id='terminal' className='notGeneric'>
									<AceEditor
										width="100%"
										height="100vh"
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
										style={{paddingTop: '13px'}}
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
