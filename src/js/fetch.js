const API_URL = 'https://63416b4320f1f9d79972a856.mockapi.io'

// function request(resource) {
//     return fetch(`${API_URL}/${resource}`).then(Response => Response.json())
// }
// request()

// .then(response => response.json())
// .then(json => console.log(json))

async function fetchAsyncCards() {
    const response = await fetch(API_URL)
    const data = await response.json()
    console.log(data)
}

fetchAsyncCards();