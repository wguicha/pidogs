const axios = require('axios');
const { API_KEY } = process.env;

const URL = 'https://api.thedogapi.com/v1/breeds?api_key='

async function getDogs (req, res) {
    console.lot("URL:", `${URL}${API_KEY}`)
    try{
        const breeds = []
        const { name } = req.query
        let response = await axios(`${URL}${API_KEY}`)

        if(name){
            response.data.forEach((x) => {
                if(x.name.toLowerCase().includes(name.toLowerCase())){
                    breeds.push({ id: x.id, name: x.name, height: x.height, weight: x.height, lifeSpan: x.life_span,  image: x.image.url })
                }
            })
        }else{
            response.data.forEach((x) => {
                breeds.push({ id: x.id, name: x.name, height: x.height, weight: x.height, lifeSpan: x.life_span,  image: x.image.url })
            })
        }

        res.status(200).json(breeds);

    } catch (err) {
        return res.status(500).json({message: err.message})
        //errorHandler(res, err)
    }
}

module.exports = getDogs;