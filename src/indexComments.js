import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, bindActionCreators } from 'redux'; // Import Redux create store
import reducer from './reducer';
// import {inc, dec, rnd} from './actions.js';
import * as actions from './actions.js'; // import all values in object

// CREATE COUNTER

// Create variable store with reducer
const store = createStore(reducer); // store creaate reducer -> create state = 0

// Add function for change value of h1
const update = () => {
    document.getElementById('counter').textContent = store.getState().value; // we need take value from state.value 
}

// function bindActionCreator return function, this function is pattern for Redux. Same function from Redux 'bindActionCreators'
// const bindActionCreator = (creator, dispatch) => (...args) => {
//     dispatch(creator(...args))
// }

// const incDispatch = bindActionCreators(inc, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);

// const {incDispatch, decDispatch, rndDispatch} = bindActionCreators({
//     incDispatch: inc,
//     decDispatch: dec,
//     rndDispatch: rnd
// }, dispatch);

const {dispatch, subscribe, getState} = store;

// For change interface (make some function), when state is changing, we use method .subscribe(function);
store.subscribe (update);

const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

document.getElementById('inc').addEventListener('click',  inc)


document.getElementById('dec').addEventListener('click', dec)

document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random()* 10);
    rnd(value);
})

// Add the eventListeners for the buttons
// document.getElementById('inc').addEventListener('click', () => {
//     store.dispatch({type: "INC"});  // Change the state with use dispatch
// })

// document.getElementById('inc').addEventListener('click', () => {
//     store.dispatch(inc());  // Change the state with use dispatch
// })


// document.getElementById('dec').addEventListener('click', () => {
//     store.dispatch(dec());
// })

// document.getElementById('rnd').addEventListener('click', () => {
//     // const value = Math.floor(Math.random()* 10)
//     store.dispatch(rnd(Math.floor(Math.random()* 10))); // action have obligatory (required) property  - type, additional property - usually  named "payload" with value
// })

// For change state use function .dispatch, it knows what state need to change, so we spend only type
// store.dispatch({type: "INC"}); // state = 1
// store.dispatch({type: "INC"}); // state = 2

// Initialization global state
// let state = reducer(initialState, {type: 'INC'}); // first time we use initialState, In action we must write object {type} 
// state = reducer(state, {type: 'INC'}); // state, in action we must write object {type} 
// state = reducer(state, {type: 'INC'}); // state, in action we must write object {type} 
// state = reducer(state, {type: 'INC'}); // state, in action we must write object {type} 
// console.log(state);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <>

        </>
    </React.StrictMode>
);
