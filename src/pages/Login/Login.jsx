import { Link, useNavigate } from "react-router-dom";
import "../SignUp/SignUp.css";
import "./Login.css";

const Login = () => {
  const navigate=useNavigate();

  const signinSumbit=(e)=>{
    e.preventDefault();
    navigate("/goals")
  }
  return (
    <div className="formPage">
    <form onSubmit={signinSumbit}>
      <div className="fields">
         <h1>Welcome Back</h1>
         <input type="email" placeholder="Email"/>
         <input type="password" placeholder="Password"/>
         <div className="agreeTerms">
            <label htmlFor="termCheck">
             <Link to={"/"} id="Forgot">Forgot Your Password?</Link>
            </label>
         </div>
      </div>
      <button>Sign In</button>
    </form>
    <div className="foot">
      <div className="seperator">
        <span></span>Or<span></span>
      </div> 
      <div className="otherLinks">
        <div className="socials">
        <span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.3541 7.53113H15.75V7.5H9V10.5H13.2386C12.6203 12.2464 10.9586 13.5 9 13.5C6.51487 13.5 4.5 11.4851 4.5 9C4.5 6.51487 6.51487 4.5 9 4.5C10.1471 4.5 11.1908 4.93275 11.9854 5.63962L14.1068 3.51825C12.7673 2.26987 10.9755 1.5 9 1.5C4.85812 1.5 1.5 4.85812 1.5 9C1.5 13.1419 4.85812 16.5 9 16.5C13.1419 16.5 16.5 13.1419 16.5 9C16.5 8.49713 16.4482 8.00625 16.3541 7.53113Z" fill="#FFC107"/>
<path d="M2.36475 5.50912L4.82887 7.31625C5.49562 5.6655 7.11037 4.5 9 4.5C10.1471 4.5 11.1907 4.93275 11.9854 5.63962L14.1067 3.51825C12.7672 2.26987 10.9755 1.5 9 1.5C6.11925 1.5 3.621 3.12637 2.36475 5.50912Z" fill="#FF3D00"/>
<path d="M8.99999 16.5C10.9372 16.5 12.6975 15.7586 14.0284 14.553L11.7071 12.5887C10.9288 13.1806 9.97779 13.5008 8.99999 13.5C7.04924 13.5 5.39287 12.2561 4.76887 10.5202L2.32312 12.4046C3.56437 14.8335 6.08512 16.5 8.99999 16.5Z" fill="#4CAF50"/>
<path d="M16.3541 7.53113H15.75V7.5H9V10.5H13.2386C12.9428 11.3312 12.41 12.0574 11.706 12.5891L11.7071 12.5884L14.0284 14.5526C13.8641 14.7019 16.5 12.75 16.5 9C16.5 8.49713 16.4482 8.00625 16.3541 7.53113Z" fill="#1976D2"/>
</svg>
            </span>
            <span>
            <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.95 9.775H8.075L8.925 6.375H5.95V4.675C5.95 3.7995 5.95 2.975 7.65 2.975H8.925V0.119C8.6479 0.0824501 7.60155 0 6.49655 0C4.1888 0 2.55 1.40845 2.55 3.995V6.375H0V9.775H2.55V17H5.95V9.775Z" fill="#1A7AEB"/>
</svg>

            </span>
        </div>
        <div className="account">
           Don’t have an account yet? <Link to={"/signup"}>Create an account</Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login