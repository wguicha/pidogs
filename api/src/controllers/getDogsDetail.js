
const axios = require('axios');
const { API_KEY } = process.env;

const URL = 'https://api.thedogapi.com/v1/breeds/search?q='

async function getDogsDetail (req, res) {
    try{
        const { idRaza } = req.params
        console.log("URL: ", `${URL}${idRaza}`)
        const breeds = []
        const response = await axios(`${URL}${idRaza}`)

        response.data.forEach((x) => {
            breeds.push({ id: x.id, name: x.name, height: x.height, weight: x.height, lifeSpan: x.life_span,  image: x.image })
        })
        console.log("breeds: ", breeds)
        res.status(200).json(breeds);

    } catch (err) {
        console.log("err.message: ", err.message)
        return res.status(500).json({message: err.message})

    }
}

module.exports = getDogsDetail;