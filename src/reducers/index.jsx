import { INCREMENT, DECREMENT, SET_DIFF } from '../actions';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routeReducer } from 'react-router-redux';

//const reducers = combineReducers({
//  form: formReducer,
//  routing: routeReducer,
//});
//
//export default reducers;

const counterInitialState = {
  value: 0,
  diff: 1
};

const counter = (state = counterInitialState, action) => {
  switch(action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        value: state.value + state.diff
      });
    case DECREMENT:
      return Object.assign({}, state, {
        value: state.value - state.diff
      });
    case SET_DIFF:
      return Object.assign({}, state, {
        diff: action.diff
      });
    default:
      return state;
  }
};


const extra = (state = { value: 'this_is_extra_reducer' }, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

const counterApp = combineReducers({
  a: counter,
  b: extra
});

export default counterApp;
