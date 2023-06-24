import * as usersAPI from "./users-api";

// takes in user data from sign up form
export async function signUp(userData) {
    // sends user data to signUp function in users-api (which passes data along as a post request)
    const token = await usersAPI.signUp(userData);
console.log(token)
    // stores the token returned by the sign up controller in local storage
    localStorage.setItem("token", token);

    // returns the user info from the token payload after being split and decoded
    return getUser();
}

export function getToken() {
    // acess local storage and retrieve the value of the JWT (JSON Web Token)
    // getItem returns null if the "token" key does not exist
    const token = localStorage.getItem("token");
    if (!token) return null;
    console.log(token)

    // token.split - breaks up the JSON token (header.payload.signature) at ".", and accesses the payload [1]
    // atob - decodes the base64-encoded payload
    // JSON.parse - converts the decoded payload string into a javascript object
    const payload = JSON.parse(atob(token.split(".")[1]));
    console.log(payload)
    // compares JWT payload expiration time (in milliseconds) to the Js Date object
    if (payload.exp < Date.now() / 1000) {
        // removes token if it's expired
        localStorage.removeItem("token");
        return null;
    }

    return token;
}

export function getUser() {
    // retrieves the token in local storage (if it exists and if it hasn't expired)
    const token = getToken();
    console.log(token)
    // splits the token, decodes the payload, converts from a JSON string into
    // a Js object, and accesses the user information from within the payload
    // returns user info
    return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}


export async function login(credentials) {
    const token = await usersAPI.login(credentials);
    localStorage.setItem('token', token);
    return getUser();
}

export async function checkToken(){
    return usersAPI.checkToken()
    .then(dateStr => new Date(dateStr));
}