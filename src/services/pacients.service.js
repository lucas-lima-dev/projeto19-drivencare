import bcrypt from "bcrypt"
import pacientsRepository from "../repositories/pacients.repository.js"
import erros from "../errors/index.js"
import jwt from "jsonwebtoken"
import "dotenv/config"

async function create({name,email,password}) {
    const {rowCount} = await pacientsRepository.findByEmail(email)
    if (rowCount) throw erros.duplicatedEmailError(email)

    const hashPassword = await bcrypt.hash(password, 10)
    await pacientsRepository.create({ name, email, password: hashPassword })

}

async function signIn({ email, password }){
    const { rowCount,rows:[pacient] } = await pacientsRepository.findByEmail(email)
    if (!rowCount) throw erros.invalidCredentialsError()

    const validPassword = await bcrypt.compare(password, pacient.password)
    if(!validPassword) throw erros.invalidCredentialsError()

    const token = jwt.sign({ pacient_id: pacient.id}, process.env.SECRET_JWT, { expiresIn: 86400})

    return token

}

export default{
    create,
    signIn
}