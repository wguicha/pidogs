import axios from 'axios';

const URL = 'https://pidogs-9fgg.onrender.com/'

export const postDog = async (newDog) => {
    console.log("URL: ", `${URL}dogs`)
    console.log("Post dog: ", JSON.stringify(newDog))
    try {
        console.log("Try1:")
        const resp = await axios.post(`${URL}dogs`, newDog);
        console.log(resp.data);
        console.log("Try:")
    } catch (error) {
        console.log("Error1:")
        console.error(error.message);
        console.log("Error:")
    }
    console.log("pase derecho:")
};