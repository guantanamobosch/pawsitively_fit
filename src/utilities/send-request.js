// This file and its function makes it easy and convenient
// to make send requests from the src-level of our application.
// (Normally, src-level components cannot make requests to files
// outside of the src folder)
import { getToken } from "./users-service";

export async function sendRequest(url, method = "GET", payload = null) {
    const options = { method };

    if (payload) {
        options.headers = { "Content-type": "application/json" };
        options.body = JSON.stringify(payload);
    }

    const token = getToken();

    if (token) {
        options.headers = options.headers || {};
        options.headers.Authorization = `Bearer ${token}`;
    }

    const res = await fetch(url, options);

    if (res.ok) return res.json();

    throw new Error("Bad request");
}
