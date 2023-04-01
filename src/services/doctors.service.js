import bcrypt from "bcrypt"
import doctorsRepository from "../repositories/doctors.repository.js"
import errors from "../errors/index.js"
import jwt from "jsonwebtoken"
import "dotenv/config"

async function create({name,email,password,speciality,location}) {
    const {rowCount} = await doctorsRepository.findByEmail(email)
    if(rowCount) throw errors.duplicatedEmailError(email)

    const hashPassword = await bcrypt.hash(password, 10)
    await doctorsRepository.create({name,email,password: hashPassword,speciality,location})
}

async function signIn({ email, password }){
    const { rowCount, rows:[doctor] } = await doctorsRepository.findByEmail(email)
    if(!rowCount) throw errors.invalidCredentialsError()

    const validPassword = await bcrypt.compare(password, doctor.password)
    if(!validPassword) throw errors.invalidCredentialsError()

    const token = jwt.sign({doctor_id: doctor.id}, process.env.SECRET_JWT, { expiresIn: 86400 })

    return token
}

export default {
    create,
    signIn
}