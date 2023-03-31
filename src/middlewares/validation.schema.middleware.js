import { conflictError } from "../errors"

export function validateSchema(schema){
    return (req,res,next) => {
        const {error} = schema.validate(req.body,{abortEarly: false})

        if(error) {
            const errors = error.details.map((detail) => detail.message)
            throw conflictError(errors)
        }
        next()
    }
}