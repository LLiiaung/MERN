import React from "react";
import Child from "./Child";
function Parent() {
  return (
    <div>
      <h1>This is parent component</h1>
      <Child fromParent='FromParent'/>
    </div>
  );
}

export default Parent;
