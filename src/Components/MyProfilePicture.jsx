import React from 'react'
import Profile from "../assets/myprofile.jpeg"
import { useNavigate } from 'react-router-dom';



const MyProfilePicture = () => {
     const navigate = useNavigate();


  return (
    <div className=' h-screen flex items-center justify-center bg-gray-100'>
        <img className='w-[400px] h-[400px] rounded' src={Profile} alt="" />
      
    </div>
  )
}

export default MyProfilePicture
