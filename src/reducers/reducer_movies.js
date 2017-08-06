import {FETCH_MOVIES} from '../actions/index';

export default function(state=[],action){
    switch (action.type){
    case FETCH_MOVIES:
        // return [action.payload.data,...state]; //ES6 syntax state.concat([action.payload.data])
        // console.log([action.payload.data,...state]);
      console.log(action);
        const RESULT_DATA = [action.payload.data,...state];
        return RESULT_DATA;
    }
    return state;
}
