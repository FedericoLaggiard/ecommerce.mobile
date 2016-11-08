import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    root: function(state = [], action){
        return state;
    }
});

export default rootReducer;