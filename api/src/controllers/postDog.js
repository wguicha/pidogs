const { Dog, Temperament } = require('../db');

async function postDog (req, res) {
    console.log("postDog api")
    console.log("req.bod:", req.body)
    try{
        const { name, image, height, weigth, lifeSpan, temperaments } = req.body;

        console.log("name:", temperaments);

        await Dog.findOrCreate({
            where: { name, image, height, weigth, lifeSpan  }
        });

        res.status(201).json("Record Created");

    } catch (err) {
        console.log(err.message)
        return res.status(500).json({message: err.message})
        //errorHandler(res, err)
    }
}

module.exports = postDog;