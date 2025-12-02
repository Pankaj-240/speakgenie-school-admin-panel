import React from 'react'
import Sidebar from './Components/SideBar'
import { Routes, Route } from "react-router-dom";
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import Leaderboard from './Components/Pages/Leaderboard/Leaderboard';
import Studensts from './Components/Pages/Studensts';
import Analytics from './Components/Pages/Analytics/Analytics';
import Setting from './Components/Pages/Settings/Setting';
const App = () => {
  return (
    <div className='flex min-h-screen bg-[#f3f4f6] text-slate-900' >
      <Sidebar/>

      <main className='w-full m-5'>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/leaderboard' element={<Leaderboard/>}/>
        <Route path='/students' element={<Studensts/>}/>
        <Route path='/analytics' element={<Analytics/>}/>
        <Route path='/settings' element={<Setting/>}/>
      </Routes>        
      </main>
    </div>
  )
}

export default App
