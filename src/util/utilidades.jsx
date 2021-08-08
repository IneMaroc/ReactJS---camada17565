let validateName = false;
let validateLastname = false;
let validateId = false;
let validateEmail = false;
let validateEmailCheck = false;
let validatePhone = false;

export default function FormValidation (valor) {


    
    nameValidation(valor.name);
    lastnameValidation(valor.lastname);
    idValidation(valor.idnr);
    emailValidation(valor.email);
    emailCheckValidation(valor.email, valor.emailcheck);
    phoneValidation(valor.tel);
    

    if  (validateName && validateLastname && validateId && validateEmail && validateEmailCheck && validatePhone) {
        return true;

    } else {
        return false;
    }

}

function nameValidation(valor) {

    if (valor === "" || valor.length === 0 || !(isNaN(valor))) {

        console.log("No dejar en blanco"); 
           
        
        return validateName = false;
    } else {
        
        return validateName = true;
    }
};

function lastnameValidation(valor) {

    if (valor === "" || valor.length === 0 || !(isNaN(valor))) {
        console.log("No dejar en blanco");
      
        return validateLastname = false;
    } else {
       
        return validateLastname = true;
    }
};

function idValidation(valor) {

    if (valor === 0 || valor.length === 0 || (isNaN(valor))) {
        console.log("No dejar en blanco, escribir solo números");
       
        return validateId = false;
    } else {
       
        return validateId = true;

    }
};

function emailValidation(valor) {

    if (valor === "" || valor.length === 0 || !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(valor))) {
        console.log("No has ingresado tu mail o el formato no es correcto");
        
        return validateEmail = false;
    } else {
        return validateEmail = true;
    }
};

function emailCheckValidation(valor, check) {

    if (valor !== check) {
        console.log("El mail confirmación no coincide");
     
        return validateEmailCheck = false;
    } else {
        return validateEmailCheck = true;
    }
};

function phoneValidation(valor) {

    if (valor === 0 || valor.length === 0 || (isNaN(valor))) {
        console.log("No dejar en blanco, escribir solo números");
       
        return validatePhone = false;
    } else {
        return validatePhone = true;
    }
};
