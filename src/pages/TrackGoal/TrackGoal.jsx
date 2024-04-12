import { Link } from "react-router-dom"
import "./TrackGoal.css"

const TrackGoal = () => {
  return (
    <div className="TrackGoal">
      <div className="upperBar">
        <Link to={"/getburn"}>Skip</Link>
      </div>
      <div className="innerImg"></div>
      <div className="innerTxt">
        <h1>Track Your Goal</h1>
        <p>Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals</p>
      </div>
      <div className="lowerBar">
      <Link to={"/getburn"} className="circle">
          <div className="arrow">
          </div>
      </Link>
      </div>
    </div>
  )
}

export default TrackGoal