import react from "react";
function Child(props) {
  return (
    <h1>
      {props.newTest} This is Child Comonent {props.fromParent}
    </h1>
  );
}
export default Child;
