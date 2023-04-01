import joi from "joi"

export const doctorsSchema = joi.object({
    name: joi.string().min(2).required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    spaciality: joi.string().required(),
    location: joi.string().required()
})