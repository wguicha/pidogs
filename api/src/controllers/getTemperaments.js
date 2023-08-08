const axios = require('axios');
const { API_KEY } = process.env;
const { Temperament } = require('../db')

const URL = 'https://api.thedogapi.com/v1/breeds?api_key='

async function getTemperaments (req, res) {
    try{
        const response = await axios(`${URL}${API_KEY}`)

        let tempArray = []
        let tempArrayUnique = []

        response.data.forEach((x) => {
            if(x.hasOwnProperty('temperament')){
                tempArray = [...tempArray, ...x.temperament.split(', ')];
            }
        });

        tempArray.forEach((name) => {
           if(tempArrayUnique.indexOf(name) === -1){
            tempArrayUnique.push(name);
            Temperament.findOrCreate({
                where: { name }
            });
           }
        })

        res.status(200).json(tempArrayUnique.sort());

    } catch (err) {
        return res.status(500).json({message: err.message})
        //errorHandler(res, err)
    }
}

module.exports = getTemperaments;