const validate = (userData, errors, setErrors) => {
    const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    const regexNumber = /\d/
    let errorsEmail = [];
    let errorsPassword = [];

    if(!userData.email) {
        errorsEmail.push('El campo email esta vacio')
    }
    if(userData.email.length > 35 ) {
        errorsEmail.push('El email debe tener maximo 35 caracteres')
    }
    if (!regexEmail.test(userData.email)) {
        errorsEmail.push('Formato del email invalido')
    }

    if(!userData.password) {
        errorsPassword.push('El campo password esta vacio')
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errorsPassword.push('La longitud del password debe ser entre 6 y 10 caracteres')
    }
    if(!regexNumber.test(userData.password)){
        errorsPassword.push('El password debe contener al menos un número')
    }
    
    setErrors({
        email: errorsEmail,
        password: errorsPassword
     })
}

export default validate;
