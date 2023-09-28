import axios from "axios";
import React, { useContext, useState } from "react";
import { Alert } from "react-bootstrap";
import { UserContext } from "../context/registercontext";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [logged, setlogged] = useState();
  const [seelogged, setseelogged] = useState();

  const {setnewtoken,newtoken,role,setrole,setloggedinUser} = useContext(UserContext);
  const handleEmail = (event) => {
    setemail(event.target.value);
  };
  const handlePassword = (event) => {
    setpassword(event.target.value);
  };

  const btnclicked = async (e) => {
    e.preventDefault();

    await axios
      .post("website/loginuser", {
        email,
        password,
      },
      {
        headers: {
          Authorization: "Bearer " + newtoken 
        }}
      )
      .then((response) => {
        if(localStorage.getItem('token') && localStorage.getItem('role')){
          setseelogged(true);
          
        }
        else{
          setseelogged(false);
        console.log(response);
        setlogged(true);
        setnewtoken(response.data.Token);
        setrole(response.data.data.role[0]);
        setloggedinUser(response.data.data.email);
        localStorage.setItem('token',response.data.Token);
        localStorage.setItem('role',response.data.data.role[0]);
      }
      })
      .catch((error) => {
        console.log(error);
        setlogged(false);
      });
  };

  const errorheading = <Alert transition={true} show={true} key="danger" variant="danger">Already logged in!!</Alert>;

  const loggedin = 
    <Alert transition={true} show={true} key="success" variant="success">
      Successfully Logged In as {email}
    </Alert>
  
  const falseuser = 
      <Alert transition={true} show={true} key="danger" variant="danger">Invalid Credentials</Alert>;
  

  return (
    <div className="outerContainer animate-in" style={{animationDelay: "800ms"}}>
        {seelogged == true ? errorheading : <p></p>}
        {logged == true ? loggedin : logged == false ? falseuser :<p></p>}
      <form onSubmit={btnclicked}>
        <h2 className="mainh2">Log In</h2>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={handleEmail}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onChange={handlePassword}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
