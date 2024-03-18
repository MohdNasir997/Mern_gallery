import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios'

export default function Images() {
  const API = import.meta.env.VITE_API
  const [images,setImages] = useState([])
  const {currentUser} = useSelector(state => state.user)
  useEffect( () => {
    const fetchimages = async () => {
      const res = await axios.get(`${API}/images/getimages/${currentUser._id}`)
      setImages(res.data)
    }
    fetchimages()
  },[])

  return (
    <ImageList sx={{ width: '100%', height: '90vh',padding:1 }}>
      {images.map((item) => (
        <ImageListItem key={item._id}>
          <img
            srcSet={`${item?.ImgUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item?.ImgUrl}?w=248&fit=crop&auto=format`}
            alt={item?.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={item?.name}
            subtitle={<span>by: {currentUser?.name}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

