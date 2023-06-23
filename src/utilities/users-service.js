import * as usersAPI from "./users-api";

export async function signUp(userData) {
    const token = await usersAPI.signUp(userData);
    localStorage.setItem("token", token);
    return getUser();
}

export function getToken() {
    // acess local storage and store the value of the JWT (JSON Web Token)
    // getItem returns null if the "token" key does not exist
    const token = localStorage.getItem("token");
    if (!token) return null;

    // token.split - breaks up the JSON token (header.payload.signature) at ".", and accesses the payload [1]
    // atob - decodes the base64-encoded payload
    // JSON.parse - converts the decoded payload string into a javascript object
    const payload = JSON.parse(atob(token.split(".")[1]));

    // compares JWT payload expiration time (in milliseconds) to the Js Date object
    if (payload.exp * 1000 < Date.now()) {
        // removes token if it's expired
        localStorage.removeItem("token");
        return null;
    }

    return token;
}

export function getUser() {
    const token = getToken();
    return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}
