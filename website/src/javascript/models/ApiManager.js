import axios from 'axios'

//use 'http://' or 'https://' fix the problem of cross-origin permission
const API_URI = 'http://localhost:3000/my_api_movies_TWtp4';

class ApiManager {

    fetchAllMovie() {
        return axios.get(`${API_URI}/movies`);
    }

    fechtMovie(id) {
        return axios.get(`${API_URI}/movies/${id}`);
    }

    addNewMovie(movie) {}

    updateMovie(id){}

    removeMovie(id){}
}

export default ApiManager;