import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Explore from '../../pages/Dashboard/Explore'
import Notifications from '../../pages/Dashboard/Notifications'
import Messages from '../../pages/Dashboard/Messages'
import Bookmarks from '../../pages/Dashboard/Bookmarks'
import Lists from '../../pages/Dashboard/Lists'
import More from '../../pages/Dashboard/More'
import Loading from "../../assets/images/loading.jpg"
const Home = lazy(
  () =>
    new Promise((resolve) => {
      return setTimeout(
        () => resolve(import('../../pages/Dashboard/Home')),
        1500,
      )
    }),
)
const Profile = lazy(
  () =>
    new Promise((resolve) => {
      return setTimeout(
        () => resolve(import('../../pages/Dashboard/Profile')),
        1500,
      )
    }),
)
function DashboardPage() {
  return (
    <div className="container mx-auto flex">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback= {<div>
              <img src= {Loading } alt="loading .. " width={100} height={100} />
            </div>}>
              <Home />
            </Suspense>
          }
        />
        <Route path="/profile" element={
          <Suspense fallback = {<div>
            <img src= {Loading} alt="loading ..." width={100} height={100} />
          </div>}><Profile /></Suspense>
        } />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </div>
  )
}

export default DashboardPage
