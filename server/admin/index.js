import fetch from 'node-fetch';


export default class admin {

    // 建構式
    constructor() {
    }

    api = () => {
        return fetch('http://localhost:3000/admin/', {
                timeout: 20000
            })
            .then((res) => {
                return res.json();
            })
            .then((body) => {
                return Promise.resolve(body);
            });
    }
};
