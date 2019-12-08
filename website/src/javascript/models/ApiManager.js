import axios from 'axios'

//use 'http://' or 'https://' fix the problem of cross-origin permission
const API_URI = 'http://localhost:3000/my_api_dashbord_TWProject';

class ApiManager {

    // find all users
    fetchAllUsers() {
        return axios.get(`${API_URI}/users`);
    }

    // find all sensors
    fetchAllSensors() {
        return axios.get(`${API_URI}/users`);
    }

    fetchOneUser(id) {
        return axios.get(`${API_URI}/users/${id}`);
    }
}

export default ApiManager;