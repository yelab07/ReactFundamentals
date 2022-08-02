function createStore() {
  // store should have four parts
  // 1: The state
  // 2:Get the State
  // 3:Listen to changes on the state .
  // 4:Update the state
  // 1: The state
  let.state;
  const listners = [];

  const getState = () => state;
  const subscribe = (listener) => {
    listners.push(listener);
  };
  // 2:Get the State
  return { getState };
}
// In the previous screencast, we started building out the createStore() function. Currently, this factory function:

// Takes in no arguments
// Sets up a local (private) variable to hold the state
// Sets up a getState() function
// Returns an object that publicly exposes the getState() function
// Let's take a look at the getState() function next.

const store = createStore();
store.subscribe(() => {
  console.log("the new state is =>", store.getState);
});
// if user subscribed more than ones
store.subscribe(() => {
  console.log("State has changed");
});
