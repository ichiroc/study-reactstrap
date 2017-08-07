import React, { Component } from 'react';
import {Button, Popover, PopoverTitle, PopoverContent} from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery'

class App extends Component {
    constructor(props){
        super(props)
        this.toggle = this.toggle.bind(this)
        this.state = {
            popoverOpen: false
        }
    }
    componentDidMount(){
        $('#plainPopoverButton').popover({trigger: 'focus'})
    }
    toggle(){
        this.setState({
            popoverOpen: !this.state.popoverOpen
        })
    }
    render() {
        return (
            <div  className="App">
              <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React</h2>
              </div>
              <Button id="reactstrapPopoverButton" onClick={this.toggle}>
                Reactstrap Popover
              </Button>
              <Popover placement="left" isOpen={this.state.popoverOpen} target="reactstrapPopoverButton" toggle={this.toggle}>
                <PopoverTitle>Popover!</PopoverTitle>
                <PopoverContent>
                  React strap Popover
                </PopoverContent>
              </Popover>
              <Button id="plainPopoverButton" title="plain!" data-placement="right" data-content="popover!">Plain Popover</Button>
            </div>
        );
    }
}

export default App;
