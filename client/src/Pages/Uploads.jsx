import { Box, Button, Divider, Stack, TextField, Typography } from "@mui/material"
import { useState,useEffect } from "react"
import axios from "axios"
import {useNavigate} from 'react-router-dom'


const AddImage = () => {
  
  const [img,setImg] = useState(undefined)
  const [perc,setPerc] = useState('')
  const [downloadurl,setDownloadUrl] = useState('')
  const navigate = useNavigate()
   
//   const uploadfile = (file) => {
//     const storage = getStorage(app);
//     const filename = new Date().getTime() + file.name
//     const storageRef = ref(storage, filename);
//     const uploadTask = uploadBytesResumable(storageRef, file);

//     uploadTask.on('state_changed',
//   (snapshot) => {
//     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//     // console.log('Upload is ' + progress + '% done');
//     setPerc(Math.round(progress))
//     switch (snapshot.state) {
//       case 'paused':
//         console.log('Upload is paused');
//         break;
//       case 'running':
//         console.log('Upload is running');
//         break;
//     }
//   }, 
//   (error) => {
//   },
//   () => {
//     // Upload completed successfully, now we can get the download URL
//     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//       console.log('File available at', downloadURL);
//       setDownloadUrl(downloadURL)
//     });
//   }
//     )
//   }
//   useEffect( () => {
//     img && uploadfile(img)
//   },[img])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    // axios.post('/api/posts',{title:data.get('title'),desc:data.get('desc'),ImgUrl: downloadurl ? downloadurl :""})
    // .then(navigate('/'))
    
  }
  return (
   <Box  flex={3} mt={2} component='form' onSubmit={handleSubmit}>
    <Stack flexDirection={'column'} spacing={2}>
       <Stack flexDirection={'row'}  m={2} >
        <Typography m={1}>Title </Typography>
        <TextField id="name" name="name" type="outlined" size="small" placeholder="name..." fullWidth required />
       </Stack>
       <Stack flexDirection={'row'} justifyContent={'start'}>
       <Typography p={1}>Upload Image :</Typography>
       {img ? (<Typography p={1}>{'Uploading' +perc+'%'}</Typography>) :<input accept="image/*" type="file" name="img" style={{border:'black solid 1px',padding:5,width:"50%"}} onChange={e => setImg(e.target.files[0])}/> }
       </Stack>
       <Divider/>
       <Stack alignContent={'center'} alignItems={'center'}>
       <Stack padding={2} sx={{width:'100px'}}>
       <Button type="submit" color="primary" variant="contained" >Submit</Button>
       </Stack>
       </Stack>
    </Stack>
   </Box>
  )
}

export default AddImage