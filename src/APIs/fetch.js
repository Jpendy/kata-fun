/* eslint-disable indent */

const URL = 'http://localhost:2000';


export const getServices = () => {
    return fetch(`${URL}/services`)
        .then(res => res.json());
};
