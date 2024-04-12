import { Link,useNavigate } from "react-router-dom";
import "./SignUp.css";
const SignUp = () => {
  const navigate=useNavigate();

  const signupSumbit=(e)=>{
    e.preventDefault();
    navigate("/login")
  }

  return (
    <div className="formPage">
      <form onSubmit={signupSumbit}>
        <div className="fields">
           <h1>Create an account</h1>
           <input type="text" placeholder="First Name"/>
           <input type="text" placeholder="Last Name"/>
           <input type="email" placeholder="Email"/>
           <input type="password" placeholder="Password"/>
           <div className="agreeTerms">
              <input type="checkbox" id="termCheck"/>
              <label htmlFor="termCheck">
               By proceeding, I agree to all 
               <Link to={"/signup"}>T&C</Link> and  <Link to={"/signup"}>Privacy Policy</Link>
              </label>
           </div>
        </div>
        <button>Create An Account</button>
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
             Already have an account? <Link to={"/login"}>Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp