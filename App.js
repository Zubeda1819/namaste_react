// The object inside createElement method is an attribute to h1 element
import React, { Component } from "react";
import ReactDOM from "react-dom";
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React"
);

console.log(heading); // heading is a JS object
// The code below is used to create nested React element, which in end converts to nested html tag.
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
]);

// To eliminate the above tedious job of creating nested tag, JSX is evolved.
//JSX produces React element.

const jsxHeading = <h1 className="head">Namaste React using JSX</h1>;
//Below is React element.
const headingElement =( 
<h1 className="head">
    {element}
    Namaste React using JSX
    </h1>
);

const element = <span> React Element</span>
//Below is react functional component.
// Component composition - calling one react component into another one.
const HeadingComponent = () => {
  return (
    <div id="container">
        {/* Calling Raect element which is normal JS variable inside JSX.  */}
        {headingElement}
        <Title/>
      <h1 className="head">Namaste react functional component</h1>
    </div>
  );
};

const Title = () => {
    return (
      <div id="container">
        <h1 className="head">Namaste react functional component</h1>
      </div>
    );
  };

const HeadingComponent2 = () => (
  <div id="container">
    <h1 className="head">Namaste react functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//This method takes JS object and convert it to h1 tag and put it to "root"
root.render(<HeadingComponent />);
// root.render(heading);
