// function createStore() {
//   // store should have four parts
//   // 1: The state
//   // 2:Get the State
//   // 3:Listen to changes on the state .
//   // 4:Update the state
//   // 1: The state
//   let.state;
//   const listners = [];

//   const getState = () => state;
//   const subscribe = (listener) => {
//     listners.push(listener);
//   };
//   // 2:Get the State
//   return { getState };
// }
// // In the previous screencast, we started building out the createStore() function. Currently, this factory function:

// // Takes in no arguments
// // Sets up a local (private) variable to hold the state
// // Sets up a getState() function
// // Returns an object that publicly exposes the getState() function
// // Let's take a look at the getState() function next.

// const store = createStore();
// store.subscribe(() => {
//   console.log("the new state is =>", store.getState);
// });
// // if user subscribed more than ones
// store.subscribe(() => {
//   console.log("State has changed");
// });

const toDelete = { type: "DELETE_FLAVOR", flavor: "vanilla" };
let state = [
  { flavor: "Chocolate", count: 36 },
  { flavor: "Vanilla", count: 210 },
];

function appReducer(state, action) {
  let iseCream = [];

  if (action.flavor === "vanilla") {
    return state.splice(1, 1);
  } else {
    return state;
  }
}
console.log(appReducer(state, "vanilla"));
// let state = [
//   { flavor: "Chocolate", count: 36 },
//   { flavor: "Vanilla", count: 210 },
// ];
// let iseCream = [1, 2, 3];

// // state.splice(1, 1).concat(iseCream);
// state.splice(1, 1).concat(iseCream);

// console.log(state);
