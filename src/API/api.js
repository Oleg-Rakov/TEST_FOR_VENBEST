import * as axios from 'axios';

const instance = axios.create({
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