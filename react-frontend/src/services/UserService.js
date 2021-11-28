import axios from 'axios';

const USERS_REST_API_URL = 'http://localhost:9090/api/users'

class UserService {

    getUsers(){
        console.log(axios.get(USERS_REST_API_URL));
        return axios.get(USERS_REST_API_URL);
    }
}

export default new UserService();