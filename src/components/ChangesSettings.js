import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/registercontext';

function ChangesSettings() {
    const [link, setlink] = useState("");
    const {loggedinUser,setregistration,registration} = useContext(UserContext);
    const [loggedValue, setloggedValue] = useState("");
   
    
    
    const handleLink = (event) => {
        setlink(event.target.value);
       
      };


        
        

      const btnclicked = async (e) => {
        e.preventDefault();
        
        await axios
          .post("website/links", {
            link,
            loggedinUser:localStorage.getItem('UserLoggedIn')
          })
          .then((response) => {
            console.log(response);
             setregistration(!registration);
          })
          .catch((error) => {
            console.log(error);
             
          });
      };


  return (
    <>
    <form onSubmit={btnclicked}>
    <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            YOUR LINK: 
          </label>
          <input
            onChange={handleLink}
            type="text"
            className="form-control"
            
            
          />
          <div id="emailHelp" className="form-text">
            We'll add this link to your website.
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        </form>
    </>
  )
}

export default ChangesSettings