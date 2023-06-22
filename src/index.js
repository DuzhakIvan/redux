import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
// import * as actions from './actions.js'; // Now we will use action on level Counter.js or App.js
import { Provider } from 'react-redux'; // Component Provider help us to send our states from store to another components

import App from './components/App';

// CREATE COUNTER
const store = createStore(reducer);

// const {dispatch, subscribe, getState} = store; // Now we will use action on down level Counter.js or App.js
// const {inc, dec, rnd} = bindActionCreators(actions, dispatch); // Now we will use action on down level Counter.js or App.js


// We commented all code, what work with DOM
// const update = () => {
//     document.getElementById('counter').textContent = getState().value; 
// }


const update = () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
        {/* <Counter
            counter={getState().value}
            inc={inc}
            dec={dec}
            rnd={() => {
                const value = Math.floor(Math.random()* 10);
                rnd(value);
            }}
        /> */}
        <Provider store={store}>
            <App/>
        </Provider>
        </React.StrictMode>
    );
}

// We can delete update and subscribe, because component Provider make it automaticly
// update();
// subscribe (update);


// document.getElementById('inc').addEventListener('click',  inc);

// document.getElementById('dec').addEventListener('click', dec);

// document.getElementById('rnd').addEventListener('click', () => {
//     const value = Math.floor(Math.random()* 10);
//     rnd(value);
// })



