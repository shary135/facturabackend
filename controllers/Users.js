import Users from "../models/Usermodels.js";
import argon2 from "argon2";
export const getUsers = async (req, res) => {
    try {
        const response = await Users.findAll();
        res.status(200).json(response);

    } catch (error) {
        res.status(500).json({
            msg: error.message,
            status: 500
        })
    }
}

export const getUserById = async (req, res) => {
    try {
        const response = await Users.findOne({
            where: {
                uuid: req.params.uuid
            }
        });
        res.status(200).json(response);

    } catch (error) {
        res.status(500).json({
            msg: error.message,
            status: 500
        })
    }
}

export const createUser = async (req, res) => {
    const { name, email, password, confPassword, role } = req.body;
    if (password !== confPassword) return res.status(400).json({ msg: "Passwords no son iguales" })
    const hashPassword = await argon2.hash(password);
    try {
        await Users.create({
            name: name,
            email: email,
            password: hashPassword,
            role: role
        })
        return res.status(201).json({
            msg: "Registro exitoso.."
        })
    } catch (error) {
        res.status(400).json({
            msg: error.message,
            status: 500
        })
    }
}

export const updateUser = (req, res) => {

}

export const deleteUser = (req, res) => {

}

