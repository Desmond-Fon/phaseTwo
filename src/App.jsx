import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Landing from "./pages/landing";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";
import ForgotPasswordPage from "./pages/forgot-password";
import AssignmentsPage from "./pages/dashboard/assignments";
import ProfilePage from "./pages/dashboard/profile";
import CoursesPage from "./pages/dashboard/courses";
import DashboardHome from "./pages/dashboard";
import CourseDetailsPage from "./pages/dashboard/courseDetails";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/dashboard">
            <Route path="" element={<DashboardHome />} />
            <Route path="assignments" element={<AssignmentsPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="courses" element={<CoursesPage />} />
            <Route path="courses/:courseId" element={<CourseDetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
