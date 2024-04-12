import "./Goals.css";
import { useNavigate } from "react-router-dom";

const Goals = () => {
  const navigate=useNavigate(); 

  const goalsSubmit=(e)=>{
      e.preventDefault();
      navigate("/workouttracker")
  }
  return (
    <div className="goals">
      <form onSubmit={goalsSubmit}>
        <div className="formEles">
          <h1>What are your goals?</h1>
          <div className="eachGoal"><p>Weight Loss</p><input type="checkbox"/></div>
          <div className="eachGoal"><p>Muscle Gain</p><input type="checkbox"/></div>
          <div className="eachGoal"><p>Flexibility and Mobility</p><input type="checkbox"/></div>
          <div className="eachGoal"><p>General Fitness</p><input type="checkbox"/></div>
          <div className="eachGoal"><p>Event - specific training</p><input type="checkbox"/></div>
          <div className="eachGoal"><p>Mindfulness and Mental Health</p><input type="checkbox"/></div>
        </div>
        <button>Confirm</button> 
      </form>
    </div>
  )
}

export default Goals