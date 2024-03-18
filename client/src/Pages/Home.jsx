import { Box, Fab, Stack } from "@mui/material"
import Images from "../Components/Images"
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
const Home = () => {
  const {currentUser} = useSelector(state => state.user)
  return (
    <Box>
      {currentUser? <Images/> : <Stack >
         Your not logged in , please <Link to='sign-in'>Sign In</Link>
        </Stack>}
      {currentUser ? 
      <Fab color="primary" aria-label="add" sx={{position:'fixed', top:'80vh', left:'48vw'}}>
        <Link to='upload' style={{color:'inherit'}}>
        <AddIcon />
        </Link>
     </Fab>: <></>}
      
    </Box>
  )
}

export default Home