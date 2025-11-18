const API_URL = ""; // CHANGE ME

function api(url, method = "GET", data = null) {
    const token = localStorage.getItem("jwt");

    return fetch(API_URL + url, {
        method,
        headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: "Bearer " + token } : {})
        },
        body: data ? JSON.stringify(data) : null
    }).then(async res => {
        if (!res.ok) {
            const errorText = await res.text();
            throw new Error(errorText || "API error");
        }
        return res.json();
    });
}

function requireAuth() {
    if (!localStorage.getItem("jwt")) {
        window.location.href = "/login";
    }
}
