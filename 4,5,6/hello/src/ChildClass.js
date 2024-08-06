import React, { component } from "react";

class ChildClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>
      <h1>Language from Parent component is {this.props.language}</h1>
      
      <h1>Framework from Parent component is {this.props.framework}</h1>
      <h1>Name from GrandParent component is {this.props.name}</h1>
      </div>;
  }
}
export default ChildClass;
