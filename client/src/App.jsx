import { Box } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Sigin from "./Pages/Sigin"
import { Search } from "./Pages/Search"
import Navbar from "./Components/Navbar"
import SignUp from "./Pages/Signup"
import AddImage from "./Pages/Uploads"

function App() {

  return (
    <>
      <Box>
       
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index path="/" element={<Home/>} />
          <Route path='/sign-in' element={<Sigin/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/upload" element={<AddImage/>}/>
        </Routes>
        </BrowserRouter>
      </Box>
    </>
  )
}

export default App
