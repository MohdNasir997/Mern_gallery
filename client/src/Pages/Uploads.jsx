import { Box, Button, Divider, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react"
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import UploadWidget from "../Components/UploadWidget.jsx"
import { useSelector } from "react-redux"


const AddImage = () => {
  
  const API = import.meta.env.VITE_API
  const {currentUser} = useSelector(state => state.user)
  const [downloadurl,setDownloadUrl] = useState('')
  const [name,setName] = useState('')
  const navigate = useNavigate()
   const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`${API}/images`,{name:name,ImgUrl:downloadurl,UserId: currentUser._id})
    navigate('/')
   }

  return (
   <Box  flex={3} mt={2} >
    <Stack flexDirection={'column'} spacing={2}>
       <Stack flexDirection={'row'}  m={2} >
        <Typography m={1}>Name </Typography>
        <TextField id="name" name="name" type="outlined" size="small" placeholder="name..."  onChange={(e) => setName(e.target.value)} fullWidth required />
       </Stack>
       <Stack flexDirection={'row'} justifyContent={'start'}>
       <Typography m={1}>Image :</Typography>
       <UploadWidget setDownloadUrl={setDownloadUrl}/> 
       </Stack>
       <Divider/>
       <Stack alignContent={'center'} alignItems={'center'}>
       <Stack padding={2} sx={{width:'100px'}}>
       <Button type="submit" color="primary" variant="contained"  onClick={handleSubmit}>Submit</Button>
       </Stack>
       </Stack>
    </Stack>
   </Box>
  )
}

export default AddImage