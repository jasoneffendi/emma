var axios = require('axios');

function blink() {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:3001/johnny/blink')
            .then((response) => {
                console.log(response)
                resolve(response)
            })
            .catch((err) => {
                console.log(err)
                reject(err)
            })
    })
}

function off() {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:3001/johnny/off')
            .then((response) => {
                console.log(response)
                resolve(response)
            })
            .catch((err) => {
                console.log(err)
                reject(err)
            })
    })
}

module.exports = { blink, off }
