import { sendRequest } from "./send-request";
const BASE_URL = "/api/users";

// takes in user data from sign up form, passed through
// signUp function in users-service
export async function signUp(userData) {
    // sends POST request containing user data through
    // "/api/users" route in server.js
    return sendRequest(BASE_URL, "POST", userData);
}
