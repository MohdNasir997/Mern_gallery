import Users from '../Models/Users.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const signIn = async (req,res) => {
    try {
        const user = await Users.findOne({name : req.body.name})
        if(!user) return res.json('Wrong Username or password')
        const IsCorrect = bcrypt.compare(req.body.password,user.password)
        if(!IsCorrect) return res.json('Wrong Username or password')
        const token = jwt.sign({id: user._id},process.env.JWT)
        const {password,...others} = user._doc
        res.cookie('access_token',token,{
            httpOnly: true
        }).status(200).json(others)
    } catch (error) {
        res.status(401).json(error)
    }
}

export const signOut = async (req,res) => {
    try {
        res.clearCookie('access_token').status(200).json('logged Out')
    } catch (error) {
        res.json(error)
    }
}

export const Register = async (req,res) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = await Users({...req.body,password:hash})
        res.status(200).json('User sucessfully created')
        await newUser.save()
    } catch (error) {
        res.json(error)
    }
}