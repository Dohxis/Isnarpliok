import React, {Component} from 'react';
import { Card, Menu, Input, Dropdown, Image} from 'semantic-ui-react';
import "./Master.css";

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

    render(){
        const trig = (
            <span>
                <Image avatar src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" />
                Domas
            </span>
        );
        const logo = (
            <span>
                <Image avatar src="http://67.media.tumblr.com/93415287687e9504db46b09d3bbf9498/tumblr_nwygrt2RtX1qiz1uyo1_1280.jpg"/>
                Isnarpliok
            </span>
        )
        var _this = this;
        return (
            <div className="App">
                <Menu className="fixed" inverted>
                    <Menu.Item className="menu-item" link>
                        <div className="menu-item-text">
                            {logo}
                        </div>
                    </Menu.Item>
                    <Menu.Item className="menu-item" onClick={_this.sideToggle.bind(this)} link>
                        <div className="menu-item-text">
                            Sidebar trigger
                        </div>
                    </Menu.Item>
                    <Menu.Item className="menu-item" link>
                        <div className="menu-item-text">
                            DeNoodle
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
                                <Dropdown.Item text='Profile' icon='user' />
                                <Dropdown.Item text='Sign Out' icon='sign out' />
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
                    hello
                </div>
            </div>
        );
    }

}

export default Master;
