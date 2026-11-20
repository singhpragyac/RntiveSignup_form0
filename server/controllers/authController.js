import SignupModel from "../models/authModel.js";

import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

export const signupController = async (req, res) => {
    try {
        const {email, password, confirmPassword} = req.body;
        
        if(!email) {
            return res.status(400).send({
                success: false,
                message: "plz enter valid email"
            });
        } else if(!password) {
            return res.status(400).send({
                success: false,
                message: "plz enter password"
            });
        }

        if (password !== confirmPassword) {
            return res.status(400).send({
                success: false,
                message: "Password does not match"
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const existingUser = await SignupModel.findOne({email});

        if(existingUser) {
            return res.status(400).send({
                success: false,
                message: "email is already exist"
            });
        }

        const user = await SignupModel({
            email,
            password: hashedPassword
        }).save();

        return res.status(201).send({
            success: true,
            message: "user register successfully"
        });

    } catch (error) {
        return res.status(500).send({
            success: false,
            error
        })
    }
}


export const loginController = async (req, res) => {
    try {
        const {email, password} = req.body;
        
        if(!email) {
            return res.status(400).send({
                success: false,
                message: "plz enter valid email"
            });
        } else if(!password) {
            return res.status(400).send({
                success: false,
                message: "plz enter password"
            });
        }
        
        const user = await SignupModel.findOne({email});
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User not found"
            });
        }

        const matchPassword = bcrypt.compare(password,user.password);

        if (!matchPassword) {
            return res.status(401).send({
                success: false,
                message: "Invalid password"
            });
        }

        const token = JWT.sign(
            {_id:user._id},
            process.env.JWT_SECRET,
            {expiresIn: "7d"}
        );
        console.log("Generated token:", token);

        return res.status(201).send({
            success: true,
            message: "user login successfully",
            user,
            token
        });

    } catch(error) {
        console.log(error)
        return res.status(400).send({
            success: false,
            message: error.message
        });
    }
}