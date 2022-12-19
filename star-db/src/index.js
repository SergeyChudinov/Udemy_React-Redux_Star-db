
class SwapiService {
    _apiBase = 'https://swapi.dev/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        const body = await res.json();
        return body;
    }
    async getAllPeople() {
        const res = await this.getResource(`/people/`)
        return res.results;
    }
    getPerson(id) {
        return this.getResource(`/people/${id}/`)
    }
    async getAllPlanets() {
        const res = await this.getResource(`/planets/`)
        return res.results;
    }
    getPlanet(id) {
        return this.getResource(`/planets/${id}/`)
    }
    async getAllStarships() {
        const res = await this.getResource(`/starships/`)
        return res.results;
    }
    getStarship(id) {
        return this.getResource(`/starships/${id}/`)
    }
}

const swapi = new SwapiService()

swapi.getAllPeople()
    .then(body => console.log(body))
swapi.getPerson(3)
    .then(body => console.log(body))
swapi.getAllPlanets()
    .then(body => console.log(body))
swapi.getPlanet(1)
    .then(body => console.log(body))
swapi.getAllStarships()
    .then(body => console.log(body))
swapi.getStarship(11)
    .then(body => console.log(body))

// getResource('https://swapi.dev/api/people/1/')
//     .then((body) => {
//         console.log(body)
//     })
//     .catch((err) => {
//         console.log('Could not fetch', err);
//     })
