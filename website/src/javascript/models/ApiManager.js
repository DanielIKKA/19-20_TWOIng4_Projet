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
        console.log("USER");
        console.log("data 0");
        console.log(data[0]);
        console.log("data 1");
        console.log(data[1]);
        console.log("data 2");
        console.log(data[2]);
        return axios.put(`${API_URI}/users?location=${data[0]}&personsInHouse=${data[1]}&houseSize=${data[2]}`);
    }

    createOneSensor(data) {
        console.log("SENSOR");
        console.log("data 0");
        console.log(data[0]);
        console.log("data 1");
        console.log(data[1]);
        console.log(`${API_URI}/sensors?location=${data[1]}&userID=${data[0]}`);
        return axios.put(`${API_URI}/sensors?location=${data[1]}&userID=${data[0]}`);
    }

    createOneMeasure(data) {
        console.log("MEASURE");
        console.log("data 0");
        console.log(data[0]);
        console.log("data 1");
        console.log(data[1]);
        console.log("data 2");
        console.log(data[2]);
        return axios.put(`${API_URI}/measures?type=${data[1]}&value=${data[2]}&sensorID=${data[0]}`);
    }
}

export default ApiManager;