import * as axios from 'axios';

let instance = axios.create({
    baseURL: 'https://venbest-test.herokuapp.com/'
})

export const peopleAPI = {
    getPeople() {
        return instance.get()
            .then(response => {
                return response.data
            })
    }
}