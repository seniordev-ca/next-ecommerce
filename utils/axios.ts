import axios from 'axios';
const axiosServices = axios.create({ baseURL: process.env.NEXT_PUBLIC_BASE_API_URL });
export default axiosServices;