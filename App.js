// const heading = React.createElement(
//   "h1",
//   { id: "heading" }, // Use a string for the id property
//   "Hello World from React"
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(heading);

// root.render(heading);

// ======================================================================================================

/**
 *
 * <div id="parent">
 *    <div id="child">
 *        <h1>I'm becoming a React developer</h1>
 *        <h2>In react there is good carrier opportunity</h2>
 *    </div>
 *    <div id="child2">
 *        <h1>I'm becoming a React developer</h1>
 *        <h2>In react there is good carrier opportunity</h2>
 *    </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm becoming a React developer"),
    React.createElement("h2", {}, "In react there is good carrier opportunity"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm becoming a React developer"),
    React.createElement("h2", {}, "In react there is good carrier opportunity"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);

root.render(parent);
