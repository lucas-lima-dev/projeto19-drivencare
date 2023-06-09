function conflictError(message) {
    return{
        name:"ConclictError",
        message
    }
}

function duplicatedEmailError(email) {
    return{
        name:"DuplicatedEmailError",
        message: "There is already an user with given email",
        email
    }
}

function unauthorizedError() {
    return{
        name:"UnauthorizedError",
        message:"You must be signed in to continue"
    }
}

function notFoundError() {
    return {
        name:"NotFoundError",
        message:"No result for this search!"
    }
}

function invalidCredentialsError() {
    return{
        name:"InvalidCredentialsError",
        message:"Email or Password are incorrect"
    }
}

function invalidUserType(){
    return{
        name:"InvalidUserType",
        message:"You must be a pacient to be allowed to create an account"
    }
}

export default {
    conflictError,
    duplicatedEmailError,
    unauthorizedError,
    notFoundError,
    invalidCredentialsError,
    invalidUserType
}