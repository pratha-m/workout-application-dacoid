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
          <span></span>
          <span></span>
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