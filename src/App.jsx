import "./App.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import GetBurn from "./pages/GetBurn/GetBurn";
import TrackGoal from "./pages/TrackGoal/TrackGoal";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Goals from "./pages/Goals/Goals";
import WorkoutTracker from "./pages/WorkoutTracker/WorkoutTracker";
import WorkoutSchedule from "./pages/WorkoutSchedule/WorkoutSchedule";

function App() {
  return (
     <Router>
      <Routes>
        <Route exact path="/" element={<TrackGoal/>}/> 
        <Route exact path="/getburn" element={<GetBurn/>}/> 
        <Route exact path="/signup" element={<SignUp/>}/> 
        <Route exact path="/login" element={<Login/>}/> 
        <Route exact path="/goals" element={<Goals/>}/> 
        <Route exact path="/workouttracker" element={<WorkoutTracker/>}/> 
        <Route exact path="/workoutschedule" element={<WorkoutSchedule/>}/> 
      </Routes>
     </Router>
  )
}

export default App
