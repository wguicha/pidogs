import axios from 'axios';

const URL = 'http://localhost:3001/'

export const postDog = async (newDog) => {
    try {
       const resp = await axios.post(`${URL}dogs`, newDog);
        alert(resp.data);
    } catch (error) {
        console.error(error.message);

    }
};