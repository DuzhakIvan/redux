const initialState = {counter: 0};

// Create function reducer by logical block scheme of Redux
// function reducer must be CLEAR, and change only from state and action, when we get same values we must have same results, DONT  make service request, random numbers, DOM-tree parametrs or something else.
// reducer myst be imutable principe, state must be not mutable
const reducer = (state = initialState, action) => { // reducer get state (what state now) and action (what action will be provide on state), state = 0 - initial parametr
    switch (action.type) {
        case 'INC':
            return {
                ...state,
                counter: state.counter + 1
            }; // Make new oject (old properties and new property)
        case 'DEC':
            return  {
                ...state,
                counter: state.counter - 1
            };
        case 'RND':
            return  {
                ...state,
                counter: state.counter * action.payload
            };// All variable property we must decluration outside the reducer, for complete principle ClEAR for reducer 
        default:
            return state;
        }
    }

export default reducer;