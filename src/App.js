import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Index from "./Pages/Index.jsx";
import JobLists from "./Pages/Job-List.jsx";
import JobDetail from "./Pages/Job-Detail.jsx";
import Resume from "./Pages/Resume.jsx";
import Profile from "./Pages/Profile.jsx";
import PostResume from "./Pages/Post-Resume";
import JobPost from "./Pages/Job-Post";
import EditResume from "./Pages/EditResume";
import ProfileDetail from "./Pages/ProfileDetails";
import BookMark from "./Pages/BookMarks";
import AppliedJob from "./Pages/AppliedJobs";
import DeleteAccount from "./Pages/DeleteAccount";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/joblist" element={<JobLists />} />
          
          <Route path="/job-details/:id" element={<JobDetail />} />

          <Route path="/resume" element={<Resume />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post/resume" element={<PostResume />} />
          <Route path="/post/job" element={<JobPost />} />
          <Route path="/edit/resume" element={<EditResume />} />
          <Route path="/profiledetail" element={<ProfileDetail />} />
          <Route path="/bookmarks" element={<BookMark />} />
          <Route path="/appliedjobs" element={<AppliedJob />} />
          <Route path="/deleteaccount" element={<DeleteAccount />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
