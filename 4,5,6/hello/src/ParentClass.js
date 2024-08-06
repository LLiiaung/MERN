import React, { component } from "react";
import ChildClass from "./ChildClass";
import Child from "./Child";
class ParentClass extends React.Component {
  render() {
    return (
      <div>
        <h1>This is parent component</h1>
        <h1>Name from APP component is {this.props.name}</h1>
        <ChildClass language="JS" framework ='react'/>
        <Child newTest="newTest" />
      </div>
    );
  }
}

export default ParentClass;
