import pacientsServices from "../services/pacients.service.js"
import erros from "../errors/index.js"

async function create(req,res, next) {
    const { name, email, password, type } = req.body
    if(type !== "pacient") throw erros.invalidUserType()

    try {
        await pacientsServices.create({name, email, password})
        return res.sendStatus(201)
    } catch (err) {
        next(err)
    }
}

async function signIn(req,res,next) {
    const {email,password} = req.body

    try {
        const token = await pacientsServices.signIn({email,password})
        return res.send({token})
    } catch (err) {
        next(err)
    }
}

export default {
    create,
    signIn
}