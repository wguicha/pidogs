const validate = (newDog, errors, setErrors) => {

    let errorsName = [];
    let errorsImage = [];
    let errorsHeight = [];
    let errorsWeight = [];
    let errorsLifeSpan = [];

    if(!newDog.name) {
        errorsName.push('El campo nombre esta vacio')
    }
    if(newDog.name.length <= 8 ) {
        errorsName.push('El nombre debe tener al menos 8 caracteres')
    }
    if(!newDog.image) {
        errorsImage.push('Debe agregar la URL de una imagen')
    }
    if(newDog.minHeight > newDog.maxHeight) {
        errorsHeight.push('La minima altura debe ser menor a la maxima altura')
    }
    if(newDog.minWeigth > newDog.maxWeigth) {
        errorsWeight.push('El minimo peso debe ser menor al maxima peso')
    }
    if(!(newDog.lifeSpan > 0)) {
        errorsLifeSpan.push('La esperanza de vida debe ser un numero:')
    }

    setErrors({
        name: errorsName,
        image: errorsImage,
        height: errorsHeight,
        weight : errorsWeight,
        lifeSpan: errorsLifeSpan,
     })
}

export default validate;
