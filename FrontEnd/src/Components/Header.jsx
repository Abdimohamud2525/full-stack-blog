import { Link } from "react-router-dom"
import { useAuth } from "../Context"
import {toast} from "react-hot-toast";
import axios from "axios";
const Header = () => {
  

  const {currentUser, setCurrentUser} = useAuth();
  console.log(currentUser)

  const HandleLogout =async()=>{

    try {
			const { data } = await axios.post("/api/v1/users/logout")
			toast.success(data);
			setCurrentUser(null);
		} catch (err) {
			console.log(err.response.data);
			toast.error(err.response.data);
		}
	};
  return (
    <div>
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>

        <h1>Logo</h1>
        <ul>
          {currentUser ? <Link to= "/createpost">Create Post</Link>:

          <>
            <Link to= "/Login">Login</Link>
          <Link to= "/SingUp">Register</Link>
          </>
        }
        </ul>
        {currentUser && (
        <>
        <button onClick={HandleLogout}>Logout</button>
        <span>Welcome {currentUser?.username}</span>
       
        </>
        )}
      </header>
    </div>
  )
}
export default Header