// import { useEffect } from "react";
import { useEffect } from "react";
import SingUp from "../Components/SingUp";
import { useAuth } from "../Context";
import {useNavigate } from "react-router-dom";

const SingUpPage = () => {


  const {currentUser} = useAuth()
  const Navigate = useNavigate()
  
  
      useEffect(()=>{
  
        if(currentUser) return Navigate("/Login");
  
      },[])


    return (
     <SingUp/>
    )
  }
  export default SingUpPage;