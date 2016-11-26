import React, {Component} from 'react';
import { Image, Icon } from 'semantic-ui-react'
import * as firebase from 'firebase';
import Collapsible from 'react-collapsible';
import tasks_data from './RawTasks.js';

class Tasks extends Component {
	constructor(){
	   super();
	   this.state = {
		   active: 0,
		   tasks: [{id: 0, comp: false}, {id: 1, comp: false}, {id: 2, comp: false}],
		   task_data: tasks_data
	   }
	}

	render(){
		var task_data = this.state.tasks.map( (task) => {
			var icon = <div> <span className="mark-text"> Test {task.id} </span> <Icon name="checkmark box" className={task.comp? "" : "hidden"}/></div>
			return(
				<div>
					<Collapsible trigger={icon} key={task.id}>
						<p>{this.state.task_data[task.id].text}</p>
					</Collapsible>
				</div>
			);
		});
		return (
			<div>
				{task_data}
			</div>
		);
	}
}

export default Tasks;
