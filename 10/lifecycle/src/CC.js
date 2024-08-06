import React, {Component} from "react";
class CC extends React.Component{
    constructor() {
        super();
        this.state={
            number:0
        }
    }
    componentWillMount(){
        alert('component will mount is called')
    }
    render(){
        return <div>
            <h1>This is class Component</h1>
            <h1>The declared number is {this.state.number}</h1>
        </div>
    }
}
export default CC