import React from 'react';

const header = new Headers();
header.append("x-api-key", "qxECK0jBFkLEk4glKDHx3Z88mC11mUfxq7NMR2EY");

//Result should be saved in the store to be accessible from all components
export const getScootersAPI = async () => {
    fetch("https://lambda.rideyego.com/technical-test", {
        method: 'GET',
        headers: header,
        redirect: 'follow'
    })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}