import { combineReducers } from 'redux';
import  reducerMovies  from './reducer_movies';

const rootReducer = combineReducers({
    movies : reducerMovies
});

export default rootReducer;
