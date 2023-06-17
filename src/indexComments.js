import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux'; // Import Redux create store

// CREATE COUNTER
const initialState = {value: 0}; // Start state

// Create function reducer by logical block scheme of Redux
// function reducer must be CLEAR, and change only from state and action, when we get same values we must have same results, DONT  make service request, random numbers, DOM-tree parametrs or something else.
// reducer myst be imutable principe, state must be not mutable
const reducer = (state = initialState, action) => { // reducer get state (what state now) and action (what action will be provide on state), state = 0 - initial parametr
switch (action.type) {
    case 'INC':
        return {
            ...state,
            value: state.value + 1
        }; // Make new oject (old properties and new property)
    case 'DEC':
        return  {
            ...state,
            value: state.value - 1
        };
    case 'RND':
        return  {
            ...state,
            value: state.value * action.payload
        };// All variable property we must decluration outside the reducer, for complete principle ClEAR for reducer 
    default:
        return state;
}
}

// Create variable store with reducer
const store = createStore(reducer); // store creaate reducer -> create state = 0

// Add function for change value of h1
const update = () => {
    document.getElementById('counter').textContent = store.getState().value; // we need take value from state.value 
}

// For change interface (make some function), when state is changing, we use method .subscribe(function);
store.subscribe (update);

// This method named "action creater"
// const inc = () => {
//     return {
//         type: 'INC'
//     }
// }

const inc = () => ({type: 'INC'}); // This code is same witj code on top
const dec = () => ({type: 'DEC'});
const rnd = (value) => ({type: 'RND', payload: value}); // action have obligatory (required) property  - type, additional property - usually  named "payload" with some value

// Add the eventListeners for the buttons
// document.getElementById('inc').addEventListener('click', () => {
//     store.dispatch({type: "INC"});  // Change the state with use dispatch
// })

document.getElementById('inc').addEventListener('click', () => {
    store.dispatch(inc());  // Change the state with use dispatch
})


document.getElementById('dec').addEventListener('click', () => {
    store.dispatch(dec());
})

document.getElementById('rnd').addEventListener('click', () => {
    // const value = Math.floor(Math.random()* 10)
    store.dispatch(rnd(Math.floor(Math.random()* 10))); // action have obligatory (required) property  - type, additional property - usually  named "payload" with value
})

// For change state use function .dispatch, it knows what state need to change, so we spend only type
store.dispatch({type: "INC"}); // state = 1
store.dispatch({type: "INC"}); // state = 2

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

