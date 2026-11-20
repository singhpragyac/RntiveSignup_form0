import mongoose from "mongoose";

const SignupSchema = new mongoose.Schema({
    email:{
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
}, {timestamps: true});


export default mongoose.model("signup", SignupSchema);