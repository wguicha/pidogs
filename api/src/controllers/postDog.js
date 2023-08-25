const { Dog, Temperament } = require('../db');

async function postDog (req, res) {

    try{
        //Traemos cada propiedad del body
        const { name, image, height, weight, lifeSpan } = req.body;
        //Creamos un arreglo con la propiedad temperaments
        const temperaments = req.body.temperaments.split(', ')

        console.log("temperaments:", temperaments)

        //creamos el registo en la tabla dogs
        const newDog = await Dog.create({
            name, image, height, weight, lifeSpan
        });

        //Para cada elemento del array temperaments creamos la relacion
        for await (const element of temperaments) {
            //Se valida si el temperamento ya existe en la bd.
            const validTemp = await Temperament.findAll(
                {where: {name : element}}
            )

            if(validTemp.length > 0){
                //Si el temperamento es encontrado se hace la relacion
                newDog.addTemperament(validTemp)
                console.log("paso 1")
            }else{
                //Si el temperamento no es encontrado se crea y se relaciona.
                const newTemp = await Temperament.create({
                    name : element
                })
                newDog.addTemperament(newTemp)
                console.log("paso 2")
            }
        }


        res.status(201).json("Record Created");

    } catch (err) {
        console.log(err.message)
        return res.status(500).json({message: err.message})

    }
}

module.exports = postDog;