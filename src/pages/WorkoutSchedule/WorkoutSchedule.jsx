import "./WorkoutSchedule.css"

const WorkoutSchedule = () => {
  return (
    <div className="workoutSchedPage">
        <div className="head">
          <span className="backBtn"></span>
          <h1>Workout Schedule</h1>
        </div>  
        <div className="dayDate">
          <div className="date">{`< Feb 2024 >`}</div>
          <div className="days">
            <div className="eachDay">
               <span>Mon</span>
               <span>9</span>
            </div>
            <div className="eachDay">
               <span>Mon</span>
               <span>9</span>
            </div>
            <div className="eachDay">
               <span>Mon</span>
               <span>9</span>
            </div>
            <div className="eachDay">
               <span>Mon</span>
               <span>9</span>
            </div>
          </div>
        </div>
        <div className="times">
          <div className="eachTime">06:00 AM</div>
          <div className="eachTime">07:00 AM</div>
          <div className="eachTime">08:00 AM</div>
          <div className="eachTime">09:00 AM</div>
          <div className="eachTime">10:00 AM</div>
          <div className="eachTime">11:00 AM</div>
          <div className="eachTime">12:00 AM</div>
          <div className="eachTime">01:00 AM</div>
          <div className="eachTime">02:00 AM</div>
          <div className="eachTime">03:00 AM</div>
          <div className="eachTime">04:00 AM</div>
          <div className="eachTime">05:00 AM</div>
        </div>
        <div className="foot">
          <div className="eachOpt"></div>
          <div className="eachOpt"></div>
          <div className="eachOpt"></div>
          <div className="eachOpt"></div>
        </div>  
    </div>
  )
}

export default WorkoutSchedule