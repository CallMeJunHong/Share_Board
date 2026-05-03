import axios from 'axios';

// Create an Axios instance with default configuration
// Cleaner code, create seperate configurations for different APIS without repeating settings.
const base = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4200'; // Use environment variable for base URL or fallback to localhost
export const axiosInstance = axios.create({
    baseURL: base,
    headers: {
        'Content-Type': 'application/json', // Set default content type and as we are using JSON
    }
});