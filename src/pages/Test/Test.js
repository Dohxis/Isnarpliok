import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react'
import * as firebase from 'firebase'
import {browserHistory} from 'react-router'
import { Grid, Button, Icon } from 'semantic-ui-react'
import './style.css';

import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/xcode';
import 'brace/mode/javascript';
import 'brace/theme/cobalt';

import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';
import Task_Data from './RawTasks.js';


@observer
class Test extends Component {

	constructor() {
		super();
		this.state = {
			code: '// Šioje vietoje rašykite visą savo kodą!\n// Sėkmės mokantis :)',
			output: '',
			lvl: 0
		};
	}

	componentDidMount(){
		var _this = this;
			const user = firebase.database().ref().child('users/' + localStorage.getItem('id_auth') + '/active');
			user.on('value', snap => {
				if(!snap.val())
					browserHistory.push('/app/select');
			});

			const lvl = firebase.database().ref().child('/users/' + localStorage.getItem('id_auth') + '/level');
			lvl.on('value', snap =>{
				if(snap.val() != null){
					_this.setState({
						lvl: snap.val()
					});
				}
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
		this.setState({
			code: newValue
		});
	}

	runCode() {
		var codeToEval = this.state.code.replace(/console.log/g, "window.store.updateCode");
		var codeToEval = codeToEval.replace(/var /g, "window.store.foundVar(); var ");
		var array = codeToEval.split(';');
		var variables = [];
		for(var x = 0; x < array.length; x++){
			if(array[x].includes("var ")){
				variables.push(array[x].split("var ")[1].replace(/ /g, ""));
			}
		}
		this.props.route.store.variables = variables;
		this.props.route.store.vars_found = 0;
		this.props.route.store.code = '';
		console.log(codeToEval);
		console.log(this.state.lvl);
		//$( ".a:contains('Terminal')" ).click();
		// eslint-disable-next-line
		eval(codeToEval);

		this.props.route.store.run(this.state.lvl);
        this.refs.area.setState({
            currentSelectedIndex: 1
        });
	}


	getTask() {
		console.log(this.state.lvl);
		return Task_Data[this.state.lvl].text;
	}

	render(){

		return (
			<div>
				<Grid columns={2}>
					<Grid.Row className="ide-grid-row0">
						<Grid.Column style={{ position: 'relative', borderRight: 'solid thick #d35400' }} width={10}>

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
						<Grid.Column width={6}  style={{ borderStyle: 'none', borderLeft: 'solid #d35400' }}>

							<Tabs ref="area" onChange={this.onTabChange.bind(this)} initialSelectedIndex={0} justified>

								<Tab value="pane-1" label="Užduotis" onActive={this.onTabActive.bind(this)}>
									<AceEditor
										width="100%"
										height="100vh"
										mode="javascript"
										theme="xcode"
										fontSize={22}
										showPrintMargin={true}
										highlightActiveLine={true}
										name="new_1"
										showGutter={false}
										editorProps={{$blockScrolling: true}}
										className="code-editor"
										readOnly={true}
										value={this.getTask()}
										style={{paddingTop: '13px'}}
									/>
								</Tab>

								<Tab value="pane-2 notGeneric" label="Išvestis" id='terminal' className='notGeneric'>
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
