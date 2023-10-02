import { useState } from "react";
import axios from "axios";
import { useAuth } from "../Context";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const {setCurrentUser } = useAuth(); // Korjattu SetCurrenUser -> setCurrentUser

  const navigate = useNavigate()
  
 

  const handleSubmit = async (event) => { // Korjattu Handlesubmit -> handleSubmit
    event.preventDefault();

    try {
      const { data } = await axios.post("/api/v1/users/login-user", {
        username,
        password,
      });

      setCurrentUser(data); // Korjattu SetCurrenUser -> setCurrentUser
      navigate("/createPost")

      

      // Aseta kirjautunut käyttäjä tietoihin datasta, jos tarpeen.

      console.log("success login successful");
    } catch (err) {
      console.log("error at login", err);
    }
  };

  return (
    <div>
      <h1>LogIn</h1> {/* Korjattu <hi> -> <h1> */}
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(event) => setUserName(event.target.value)}
          type="text"
          placeholder="enter your name"
        />
        <br />
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="enter your password"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Login;
