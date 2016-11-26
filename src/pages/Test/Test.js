import React, {Component} from 'react'
import {observer} from 'mobx-react'
import { Grid, Image } from 'semantic-ui-react';

@observer
class Test extends Component {

	componentWillMount(){

	}

	render(){
		return (
			<div>
				<Grid columns={2}>
					<Grid.Row>
						<Grid.Column>
							kjshdkjfhskfjshf
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