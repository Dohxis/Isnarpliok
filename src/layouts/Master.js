import React, {Component} from 'react';
import { Card, Menu, Input, Dropdown, Image} from 'semantic-ui-react';
import "./Master.css";
import {browserHistory} from "react-router";
import {observer} from 'mobx-react'

@observer
class Master extends Component {
    constructor(){
       super();
       this.state = {
           sideToggle: "animating"
       }
    }

    sideToggle(e){
        var _this = this;
        this.setState({
            sideToggle: this.state.sideToggle == "animating"? 'visible animating' : "animating"
            }
        );
    }

    router_user(){
        browserHistory.push('/app/user/' + this.props.route.store.userID)
    }

    router_home(){
        browserHistory.push('/app')
    }

    router_select(){
        browserHistory.push('/app/select')
    }

    sign_out(){
        this.props.route.store.logout();
        browserHistory.push('/')
    }

    render(){
        const trig = (
            <span>
                <Image avatar
                    src={this.props.route.store.user.identity ?
                        this.props.route.store.user.identity.picture :
                        "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"} />
                {this.props.route.store.user.identity ? this.props.route.store.user.identity.nickname : ""}
            </span>
        );
        const logo = (
            <span>
                <Image avatar src="/logo_white.png"/>
                DeNoodle
            </span>
        )
        var _this = this;
        return (
            <div className="App">
                <Menu className="fixed" inverted>
                    <Menu.Item className="menu-item menu-item-first" link onClick={_this.router_home.bind(this)}>
                        <div className="menu-item-text">
                            {logo}
                        </div>
                    </Menu.Item>
                    <Menu.Item className="menu-item" onClick={_this.sideToggle.bind(this)} link>
                        <div className="menu-item-text">
                            Sidebar trigger
                        </div>
                    </Menu.Item>
                    <Menu.Item className="menu-item" onClick={_this.router_select.bind(this)} link>
                        <div className="menu-item-text">
                            Select Language
                        </div>
                    </Menu.Item>
                    <Menu.Item className="menu-item" link>
                        <div className="menu-item-text">
                            DeNoodle
                        </div>
                    </Menu.Item>
                    <Menu.Item className="useris" position="right">
                        <Dropdown trigger={trig} pointing='top right' icon={null}>
                            <Dropdown.Menu>
                                <Dropdown.Item text='Profile' icon='user' onClick={_this.router_user.bind(this)}/>
                                <Dropdown.Item text='Sign Out' icon='sign out' onClick={_this.sign_out.bind(this)} />
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Item>
                </Menu>
                <div className={"ui right very wide vertical inverted sidebar labeled icon menu overlay " + this.state.sideToggle}>
                  <a className="item">
                    <i className="home icon"></i>
                    Home
                  </a>
                  <a className="item">
                    <i className="block layout icon"></i>
                    Topics
                  </a>
                  <a className="item">
                    <i className="smile icon"></i>
                    Friends
                  </a>
                </div>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }

}

export default Master;
