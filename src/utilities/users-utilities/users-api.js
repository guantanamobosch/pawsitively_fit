import sendRequest from "../send-request"
const BASE_URL = "/api/users";

// user data from sign up form, passed through
// signUp function in users-service
export function signUp(userData) {
    // sends POST request containing user data through
    // "/api/users" route in server.js
    return sendRequest(BASE_URL, "POST", userData);
}

export function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}

export function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`);
}
