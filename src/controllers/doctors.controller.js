import doctorsServices from "../services/doctors.service.js"
import erros from "../errors/index.js"

async function create(req,res,next) {
    const {name,email,password,speciality,location, type} = req.body
    if(type !== "doctor") throw erros.invalidUserType()

    try {
        await doctorsServices.create({name,email,password,speciality,location})
        return res.sendStatus(201)
    } catch (err) {
        next(err)
    }
}

async function signIn(req,res,next) {
    const {email, password} = req.body

    try {
        const token = await doctorsServices.signIn({email, password})
        return res.send({token})
    } catch (err) {
        next(err)
    }
}

export default {
    create,
    signIn
}