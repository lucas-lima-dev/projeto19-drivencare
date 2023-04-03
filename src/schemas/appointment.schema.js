import joi from "joi"

export const appointmentSchema = joi.object({
 date: joi.string().date().required(),
 time: joi.string().time().required(),
 status: joi.string().boolean()
})