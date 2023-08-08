const { Temperament } = require('../db')

async function listTemperaments (req, res) {
    try {
        if(email && password){
            const temperaments = await Temperament.findAll({

            });

            return res.status(201).json(temperaments);

        } else {
            return res.status(400).json({message: 'Faltan datos'})
        }
    } catch (error) {
        return res.status(500).json({message: error})
    }
}

module.exports = listTemperaments;