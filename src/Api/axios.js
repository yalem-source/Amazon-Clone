// import axios from "./axios";
// const axiosInstance = axios.create({
// 	baseURL: "http://127.0.0.1:5001/clone-45bf9/us-central1/api",
// });

// export {axiosInstance};
import axios from "axios"; // Import from axios directly

const axiosInstance = axios.create({
	baseURL: "http://127.0.0.1:5001/clone-45bf9/us-central1/api",
});

export default axiosInstance; // Change to default export
