import axios from 'axios';

// check token & load user
export const loadUser = () => (dispatch, getState) => {

    axios.get('/api/auth/user')
}