/**
 * <div id="parent">
 *     <div id="child">
 *          <h1> Hi I am h1</h1>
 *          <h2> Hi I am h2</h2>
 *     </div>
 *      <div id="child2">
 *          <h1> Hi I am h1</h1>
 *          <h2> Hi I am h2</h2>
 *     </div>
 * </div>
 */

// const parent = React.createElement("div", {id:"parent"},
//     React.createElement("div", {id:"child"},[
//         React.createElement("h1", {}, "Hi I am h1"), 
//         React.createElement("h2", {}, "Hi I am h2")
//     ])
// )

// const heading = React.createElement("h1", {id:"heading"}, "Hello World from React!");
// console.log(heading);

const parent = React.createElement("div", {id:"parent"},[
    React.createElement("div", {id:"child"}, [
        React.createElement("h1", {}, "HI, I am h1"),
        React.createElement("h2", {}, "HI, I am h2")
    ]),
    React.createElement("div", {id:"child2"}, [
        React.createElement("h1", {}, "HI, I am h1"),
        React.createElement("h2", {}, "HI, I am h2")
    ])
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);