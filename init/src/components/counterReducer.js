const initialState = {count:0};

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        case 'reset':
            return initialState;
        default:
            return state;
    }
}