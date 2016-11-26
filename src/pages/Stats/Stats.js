import React, {Component} from 'react'
import {observer} from 'mobx-react'
import * as firebase from 'firebase'
import {browserHistory} from 'react-router'
import { Table, Icon } from 'semantic-ui-react'


@observer
class Stats extends Component {
  
  componentWillMount(){
    const user = firebase.database().ref().child('users/' + localStorage.getItem('id_auth') + '/active');
    user.on('value', snap => {
      if(!snap.val())
      	browserHistory.push('/app/select');
    });
    
    this.usr = firebase.database().ref().child('users');
	}
	
	render(){
    
    
    
		return (
			<div>
        <Table selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell size='small'>Rank</Table.HeaderCell>
              <Table.HeaderCell>User</Table.HeaderCell>
              <Table.HeaderCell>JS progress</Table.HeaderCell>
              <Table.HeaderCell>PHP progress</Table.HeaderCell>
              <Table.HeaderCell>Python progress</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>1 <Icon name='trophy' color='yellow' /></Table.Cell>
              <Table.Cell>FUCKING</Table.Cell>
              <Table.Cell>20/20</Table.Cell>
              <Table.Cell>3/25</Table.Cell>
              <Table.Cell>19/21</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>2 <Icon name='trophy' color='grey' /></Table.Cell>
              <Table.Cell>JAVASCRIPT</Table.Cell>
              <Table.Cell>5/20</Table.Cell>
              <Table.Cell>0/25</Table.Cell>
              <Table.Cell>10/21</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>3 <Icon name='trophy' color='brown' /></Table.Cell>
              <Table.Cell>Ayyy</Table.Cell>
              <Table.Cell>20/20</Table.Cell>
              <Table.Cell>3/25</Table.Cell>
              <Table.Cell>19/21</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>4</Table.Cell>
              <Table.Cell>Lmao</Table.Cell>
              <Table.Cell>5/20</Table.Cell>
              <Table.Cell>0/25</Table.Cell>
              <Table.Cell>10/21</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
			</div>
		);
	}

}

export default Stats;