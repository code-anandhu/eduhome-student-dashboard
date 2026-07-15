import React from 'react'
import { Route, Routes } from 'react-router-dom'
import VerifyOtp from '../pages/auth/VerifyOtp'
import Login from '../pages/auth/Login'
import Dashboard from '../pages/dashboard/Dashboard'
import Course from '../pages/course/Course'
import Profile from '../pages/profile/Profile'
import Subject from '../pages/subjects/Subject'
import Chapters from '../pages/chapters/Chapters'
import Videos from '../pages/videos/Videos'
import VideoPlayer from '../pages/videos/VideoPlayer'
import AuthLayout from '../layouts/AuthLayout'
import DashboardLayout from '../layouts/DashboardLayout'
import ProtectedRoute from "../components/auth/ProtectedRoute";
import Levels from '../pages/levels/Levels'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/verify-otp' element={<VerifyOtp />} />
      </Route>


      <Route element={  <ProtectedRoute> <DashboardLayout /> </ProtectedRoute>}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/subjects/:courseId' element={<Subject />} />
        <Route path='/chapters/:subjectId' element={<Chapters />} />
        <Route path='/videos/:chapterId' element={<Videos />} />
        <Route path='/videoplayers/:videoId' element={<VideoPlayer />} />
        <Route path='/courses' element={<Course />} />
        <Route path='/profile' element={<Profile />} />
         <Route path='/levels/:chapterId' element={<Levels />} />
      </Route>


    </Routes>
  )
}

export default AppRoutes