import Images from '../Models/Images.js'

export const GetImages = async (req,res) => {
    const id = req.params.id
    try {
        const images = await Images.find({UserId: id})
        res.status(200).json(images)
    } catch (error) {
        res.json(error)
    }
}

export const GetOneImage = async (req,res) => {
    const id = req.params.id
    try {
        const image = await Images.findOne({_id: id})
        res.status(200).json(image)
    } catch (error) {
        res.json(error)
    }
}

export const AddOneImage = async (req,res) => {
    try {
        const newImage = await new Images(req.body)
        res.status(200).json('new image added')
        await newImage.save()
    } catch (error) {
        res.json(error)
    }
}

export const SearchImage = async (req,res) => {
    const query = req.query.search
    try {
        const image = await Images.find({name:{$regex: query,$options: "i"},}).limit(10)
        res.status(200).json(image)
    } catch (error) {
        res.json(error)
    }
}