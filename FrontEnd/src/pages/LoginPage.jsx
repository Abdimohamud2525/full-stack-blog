// import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { useNavigate } from "react-router-dom";
import Login from "../Components/Login";
import { useAuth } from "../Context";
import { useEffect } from "react";

const LoginPage = () => {

  const {currentUser} = useAuth()
const Navigate = useNavigate()


    useEffect(()=>{

      if(currentUser) return Navigate("/createPost");

    },[currentUser])

    return (
      <Login/>
    )
  }
  export default LoginPage;