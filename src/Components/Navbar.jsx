import React from "react";
import {  useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"
import { getLogoutAPI } from "../Redux/AuthReducer/action";
const Navbar = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const auth = useSelector((state) => state.authreducer.data.isAuth);
const handle=()=>{
if(!auth)
navigate("/login")
if(auth)
{
dispatch(getLogoutAPI())
}
}

  return (
    <div>
      <div data-cy="navbar-home-link">
        <img
          src="/Adidas_Logo.png"
          width="60px"
          alt="logo"
          style={{ display: "block" }}
        />
      </div>

      <div>
        {/* Link button to /login page, if the user is not authenticated, else don't show it*/}
      
        { <button data-cy="navbar-login-button" onClick={handle}>{localStorage.getItem("login")? "Logout":"Login" }</button>}
      </div>
    </div>
  );
};

export default Navbar;
