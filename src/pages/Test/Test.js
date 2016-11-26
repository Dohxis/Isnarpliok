import React, {Component} from 'react'
import {observer} from 'mobx-react'
import * as firebase from 'firebase'
import {browserHistory} from 'react-router'

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
		return (
			<div>
				IDE
			</div>
		);
	}

}

export default Test;