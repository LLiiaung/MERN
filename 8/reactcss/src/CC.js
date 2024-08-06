import React, {Component} from 'react'
class CC extends React.Component {
    constructor() {
        super();
        this.state = {
            color:'green',
            bgcolor:'yellow'
        }
    }
    changeColor = ()=> {
        this.state.color = 'red'
    }
    changeBGColor = ()=> {
        this.setState({bgcolor:'blue'})
    }
    render() {
        return <div>
            <h1 style={{color:this.state.color, backgroundColor:this.state.bgcolor}}>This is dynamic css</h1>
            <button onClick={this.changeColor}>change color</button>
            <button onClick={this.changeBGColor}>change background color</button>
        </div>
    }
}
export default CC