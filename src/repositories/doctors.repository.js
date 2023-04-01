import db from "../config/database.js";

async function findByEmail(email) {
    return await db.query(
    `
    SELECT * FROM doctors WHERE email = $1
    `,
    [email]
    )
}

async function create({name,email,password,speciality,location}) {
    await db.query(
    `
    INSERT INTO doctors (name, email, password, speciality, location )
    VALUES ($1,$2,$3,$4,$5)
    `,
    [name,email,password,speciality,location]
    )
}

async function findByName(name) {
    return await db.query(
    `
    SELECT * FROM doctors WHERE name = $1
    `,
    [name]
    )
}

async function findBySpeciality(speciality) {
    return await db.query(
    `
    SELECT * FROM doctors WHERE speciality = $1
    `,
    [speciality]
    )
}

async function findByLocation(location) {
    return await db.query(
    `
    SELECT * FROM doctors WHERE location = $1
    `,
    [location]
    )
}

export default {
    findByEmail,
    create,
    findByName,
    findBySpeciality,
    findByLocation
}