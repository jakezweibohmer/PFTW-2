import { useState } from "react";
import "./App.css";

function App() {
  const myNewObject = {
    foo: "bar",
    baz: "blarg",
  };
  // destructuring
  const { foo, baz } = myNewObject;
  console.log("this should be foo", foo);
  console.log("this should be baz", baz);
  // spread operator ...
  // merge new properties with another object
  // into a new object
  const myOtherObject = {
    ...myNewObject,
    someKey: "this",
    someOtherKey: "that",
  };
  // overwrite existing values
  const myLastObject = {
    ...myNewObject,
    foo: "banana",
  };
  const myReallyLastObject = {
    ...myNewObject,
    ...myOtherObject,
    ...myLastObject,
  };
  // array notation
  const myFooVar = "foo";
  console.log("array notation", myNewObject[myFooVar]);

  return <>Hi everyone!</>;
}

export default App;
