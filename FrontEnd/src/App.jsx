/* eslint-disable react-hooks/exhaustive-deps */
import Header from "./Components/Header"
import {Navigate, Outlet} from "react-router-dom"
import { useAuth } from "./Context"
import { useEffect } from "react"
import axios from "axios"
import toast from "react-hot-toast"


function App() {

  const {SetCurrentUser} = useAuth()

  useEffect(()=>{

    const fetUserProfile = async ()=>{
      try{

        const {data} = await axios.get("/api/v1/users/get-user-profile");

        SetCurrentUser(data)
      }
      catch(error){

        toast.error(error.response.data);
        console.log("error", error)
      }
    };
    fetUserProfile()
  }, [SetCurrentUser])

  return (
    <div style={{maxWidth: "1112px" , marginInline: "auto" , padding: "20px"}}>
    <Header/>
    <Outlet/>
    </div>
  )
}

export default App
