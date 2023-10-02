/* eslint-disable react-hooks/rules-of-hooks */
// import { useEffect } from "react";
import CreatePost from "../Components/CreatePost"
import { useAuth } from "../Context"
import ProtectetPage from "../util/ProtectetPage"


const CreatePostPage = () => {

  return (
   <ProtectetPage>
      <CreatePost/>
   </ProtectetPage>
   
  
  )
}
export default CreatePostPage