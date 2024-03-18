import {Router} from 'express'
import { AddOneImage, GetImages, GetOneImage, SearchImage } from '../Controllers/ImageController.js';

const router = Router();

// Get Image
router.get('/:id', GetOneImage)
// Get All post
router.get('/getimages/:id',GetImages)


// Get Search Post
router.get('/search/search',SearchImage)
// Post Create Post
router.post('/',AddOneImage)
// PUt Update Post
router.put('/:id')




export default router