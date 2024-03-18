import mongoose, {Schema} from 'mongoose'

const schema = Schema;

const UserSchema = schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    password: {
        type: String,
        required:true
    },
    ImgUrl:{
        type:String
    },
},
{timestamps:true}
)

export default mongoose.model('Users',UserSchema)