const { Dog } = require('../db');

async function postDog (req, res) {

    try{
        const { name, image, height, weight, lifeSpan } = req.body;

        await Dog.findOrCreate({
            where: { name, image, height, weight, lifeSpan  }
        });

        res.status(201).json("Record Created");

    } catch (err) {
        console.log(err.message)
        return res.status(500).json({message: err.message})

    }
}

module.exports = postDog;