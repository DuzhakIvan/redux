import React from 'react';
import ReactDOM from 'react-dom/client';

// CREATE COUNTER
const initialState = 0;

// create function reducer by logical block scheme of Redux
const reducer = (state = 0, action) => { // reducer get state (what state now) and action (what action will be provide on state), state = 0 - initial parametr
    switch (action.type) {
        case 'INC':
            return state + 1;
        default:
            return state;
    }
}

// Initialization global state
let state = reducer(initialState, {type: 'INC'}); // first time we use initialState, In action we must write object {type} 
state = reducer(state, {type: 'INC'}); // state, in action we must write object {type} 
state = reducer(state, {type: 'INC'}); // state, in action we must write object {type} 
state = reducer(state, {type: 'INC'}); // state, in action we must write object {type} 
console.log(state);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>

    </>
  </React.StrictMode>
);

