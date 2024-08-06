import React, {Component} from 'react'
class CC extends React.Component {
    getAlert = ()=>{
        alert('get alert')
    }
    inputAlert = ()=>{
        alert('input alert')
    }
    hoverAlert = ()=>{
        alert('input alert')
    }
    render() {
        return <div>
              <h1>event handling in react</h1>
              <button onClick = {this.getAlert}>click me</button>
              <input type = 'text' onChange = {this.inputAlert}></input>
              <h2 onMouseOver={this.hoverAlert}>Hover here to get alert</h2> 
            </div>
          
    }
}



export default CC;
