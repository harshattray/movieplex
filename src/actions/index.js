import axios from 'axios';


const API_KEY = 'aabca0d';

export const FETCH_MOVIES ='FETCH_MOVIES';

const  ROOT_URL = `http://www.omdbapi.com/`


export function fetchMovies(city){
    const url = `${ROOT_URL}?t=${city}?&apikey=${API_KEY}`;
    const request = axios.get(url);
    return{
        type: FETCH_MOVIES,
        payload : request
    }
}
