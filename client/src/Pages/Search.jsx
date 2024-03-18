import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

export const Search = () => {
  const API = import.meta.env.VITE_API
  const search = useLocation().search;
  const [images,setImages] = useState([])
  const {currentUser} = useSelector(state => state.user)
  useEffect( () => {
    const fetchimages = async () => {
      const res = await axios.get(`${API}/images/search/search${search}`)
      setImages(res.data)
    }
    fetchimages()
  },[search])

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
  )
}
