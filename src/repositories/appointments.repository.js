import db from "../config/database";

async function findByDoctor() {

}

async function create({ pacient_id, doctor_id, date, time}) {

}

async function findAll() {
    return await db.query(
    `
    SELECT * FROM appointments
    `
    )
}

async function findPacientAppointments(pacient_id) {
    return await db.query(
    `
    SELECT 
     p.name as "pacient_name",
     d.name as "doctor_name",
     d.speciality as "doctor_speciality",
     a.date as "appointment_date",
     a.time as "appointment_time"
    FROM appointments a
     JOIN pacients p ON a.pacient_id = p.id
     JOIN doctors d ON a.doctors_id = d.id
    WHERE a.pacient_id = $1
    `,
    [pacient_id]
    )

}

async function findDoctorAppointments(doctor_id) {
    return await db.query(
    `
    SELECT 
     d.name as "doctor_name",
     p.name as "pacient_name",
     d.speciality as "doctor_speciality",
     a.date as "appointment_date",
     a.time as "appointment_time"
    FROM appointments a
     JOIN pacients p ON a.pacient_id = p.id
     JOIN doctors d ON a.doctors_id = d.id
    WHERE a.pacient_id = $1
    `,
    [doctor_id]
    )

}

async function updateStatus( doctor_id, pacient_id, date, time, status ) {
    return await db.query(
    `
    UPDATE appointments
    SET status = $1
    WHERE 
     doctor_id = $2 && 
     pacient_id = $3 && 
     date = $4 &&
     time = $5
    `,
    [status,doctor_id,pacient_id,date,time]
    )
}

export default {
    findByDoctor,
    create,
    findPacientAppointments,
    findDoctorAppointments,
    updateStatus
}