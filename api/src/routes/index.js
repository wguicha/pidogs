const { Router } = require('express');
const getDogs = require('../controllers/getDogs')
const getTemperaments = require('../controllers/getTemperaments')
const getBreedDetail = require('../controllers/getDogsDetail')
const postDog = require ('../controllers/postDog')
const listTemperaments = require ('../controllers/listTemperaments')


const router = Router();

router.get('/dogs', getDogs)
router.get('/dogs/:idRaza', getBreedDetail)
router.get('/temperaments', getTemperaments)
router.post('/dogs', postDog)
router.get('/listTemperaments', listTemperaments)

module.exports = router;
