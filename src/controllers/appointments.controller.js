import appointmentsServices from "../services/appointments.service.js";


async function create(req,res,next) {
    const { date, time } = req.body
    const { pacient_id } = res.locals.pacient_id
    const { doctor_id } = res.locals.doctor_id

    try {
        await appointmentsServices.create({pacient_id,doctor_id,date,time})
        return res.sendStatus(201)
    } catch (err) {
        next(err)
    }

}

async function findAll(req,res,next) {
    try {
        const appointments = await appointmentsServices.findAll()

        return res.send({appointments})
    } catch (err) {
        next(err)
    }
}

async function findPacientAppointments() {
    const { pacient_id } = res.locals.pacient_id

    try {
        const pacientAppointments = await appointmentsServices.findPacientAppointments(pacient_id)

        return res.send({pacientAppointments})
    } catch (err) {
        next(err)
        
    }

}

async function findDoctorAppointments() {
    const { doctor_id } = res.locals.doctor_id

    try {
        const doctorAppointments = await appointmentsServices.findDoctorAppointments(doctor_id)

        return res.send({doctorAppointments})
    } catch (err) {
        next(err)
        
    }
}



export default {
    create,
    findAll,
    findPacientAppointments,
    findDoctorAppointments
}