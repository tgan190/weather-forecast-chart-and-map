import {FETCH_WEATHER} from '../actions/index';

//export default function(state=null, action) {
export default function(state=[], action) {
    //console.log('Action received in reducer', action);
    
    switch (action.type) {
        case FETCH_WEATHER:
            // below only handles one city at a time
           // return [action.payload.data];
            // do not use stats.push as it would be mutating the state.
            // use state.concat instead to create a new state.
            //return state.concat([action.payload.data]);
		 console.log('Action received in reducer - action.payload.data');
		 console.log(action.payload.data);
            return [action.payload.data, ...state];
    }
    
    return state;
}