let state = {count: 0}; // We declare our state to equal an object {count: 0}
 
function changeState(state, action){
    switch (action.type) {
      case 'INCREASE_COUNT': //action, {type: 'INCREASE_COUNT'}
        return {count: state.count + 1}
      default:
        return state;
    }
  }
 
function dispatch(action){ //When we call dispatch, this calls our changeState reducer, and passes the action object to the reducer. When called, the changeState reducer also takes in state, which has been declared up above.
  state = changeState(state, action) //state is assigned the return value of changeState
  render()
}
 
dispatch({type: 'INCREASE_COUNT'})
  // => {count: 1}
dispatch({type: 'INCREASE_COUNT'})
  // => {count: 2}
dispatch({type: 'INCREASE_COUNT'})
  // => {count: 3}


  function render(){
    document.body.textContent = state.count
  }
   
  // call the render function
  render()




// function changeState(state, action){
//   switch (action.type) {
//     case 'INCREASE_COUNT':
//       return {count: state.count + 1}
//     default:
//       return state;
//   }
// }

// let state = {count: 0}
// let action = {type: 'INCREASE_COUNT'}

// changeState(state, action)