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
        return axios.get(`${API_URI}/sensors`);
    }

    // find all measure
    fetchAllMeasures() {
        return axios.get(`${API_URI}/measures`);
    }

    fetchOneUser(id) {
        return axios.get(`${API_URI}/users/${id}`);
    }

    createOneUser(data) {
        return axios.put(`${API_URI}/users?location=${data[0]}&personsInHouse=${data[1]}&houseSize=${data[2]}}`);
    }
}

export default ApiManager;