// this file and its function makes it easy and convenient
// to make send requests from the src-level of our application.
// (normally, src-level components cannot make requests to files
// outside of the src folder)
import { getToken } from "./users-utilities/users-service";

// three parameters - the url being sent to/for, the HTTP request
// method (default as "GET"), and the payload (default as null)
export default async function sendRequest(url, method = "GET", payload = null) {
    // stores the HTTP request method in the options object
    const options = { method };

    // only if sendRequest is given a payload as an argument
    if (payload) {
        // sets headers to indicate that the req payload is in JSON format
        options.headers = { "Content-type": "application/json" };

        // converts the payload into JSON string format
        options.body = JSON.stringify(payload);
    }

    // from ./users-service.js - gets the token from local storage
    const token = getToken();
    console.log(token);

    // only if getToken() returns a truthy value
    if (token) {
        // keep option headers if they were defined above,
        // or define option headers as an empty object
        options.headers = options.headers || {};

        // authorize the options/payload with the token
        options.headers.Authorization = `Bearer ${token}`;
    }

    // fetch is a built-in javascript function for making HTTP requests
    const res = await fetch(url, options);
    console.log(res.status);

    // fetch considers HTTP error responses as successful responses, so
    // manually check for those with .ok and returns the response body
    // as JSON
    if (res.ok) return res.json();

    // Error if (!res.ok)
    throw new Error("Bad request");
}
