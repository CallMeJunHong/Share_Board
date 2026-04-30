import axios from 'axios';

// Create an Axios instance with default configuration
// Cleaner code, create seperate configurations for different APIS without repeating settings.
export const axiosInstance = axios.create({
    baseURL: 'http://localhost:4200',
    headers: {
        'Content-Type': 'application/json', // Set default content type and as we are using JSON
    }
});