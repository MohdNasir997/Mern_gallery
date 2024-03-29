import mongoose from "mongoose";

export const ConnectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO);
        console.log('Connected to :',conn.connection.host)
    } catch (error) {
        console.log(error)
    }
}