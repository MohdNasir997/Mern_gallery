import { Button } from '@mui/material';
import { useEffect, useRef } from 'react';
import FileUploadIcon from '@mui/icons-material/FileUpload';
 const UploadWidget = ({setDownloadUrl}) => {
    const preset = import.meta.env.VITE_Uplaod_preset
    const cloudname = import.meta.env.VITE_CloudName
    const cloudinaryRef = useRef()
    const widgetRef = useRef()
 
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: cloudname,
            uploadPreset: preset
        },function (error,result) {
            console.log(result)
            if (result.event === "success") {
                console.log("result.info.secure_url", result.info.secure_url);
                setDownloadUrl(result.info.secure_url)
              }
        })
    },[])
  return (
    <Button startIcon={<FileUploadIcon/>} variant='contained' onClick={() => widgetRef.current.open()}>Upload</Button>
  )
}

export default UploadWidget