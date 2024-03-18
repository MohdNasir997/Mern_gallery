import mongoose, {Schema} from 'mongoose'

const schema = Schema;

const ImagesSchema = schema({
    name: {
        type: String,
        required: true
    },
    ImgUrl:{
        type:String
    },
    UserId:{
        type:String,
    }
},
{timestamps:true}
)

export default mongoose.model('Images',ImagesSchema)