import { Link } from "react-router-dom";
import "../TrackGoal/TrackGoal.css";
import "./GetBurn.css"

const GetBurn = () => {
  return (
    <div className="TrackGoal">
    <div className="upperBar">
      <Link to={"/signup"}>Skip</Link>
    </div>
    <div className="innerImg" id="burnImg"></div>
    <div className="innerTxt">
      <h1>Get Burn</h1>
      <p>Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever</p>
    </div>
    <div className="lowerBar">
        <Link to={"/signup"} className="circle">
           <div className="arrow">
            
           </div>
        </Link>
    </div>
  </div>
  )
}

export default GetBurn