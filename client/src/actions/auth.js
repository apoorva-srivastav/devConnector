import {
    REGISTER_SUCCESS, REGISTER_FAIL
} from "../actions/types";
import { setAlert } from '../actions/alerts';
import axios from 'axios';

// Register user
export const register = ({ name , email, password }) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ name, email, password });

    try{

        const res = await axios.post('/api/users', body, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    } catch(err) {
        const errors = err.response.data.errors;

        if( errors ) {
            error.forEach((alert)=> dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: REGISTER_FAIL
        });
    }

};
