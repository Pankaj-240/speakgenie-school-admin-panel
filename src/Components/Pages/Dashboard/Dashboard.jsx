import React from 'react'
import TopHeader from './components/TopHeader'
import StatsGrid from './components/StatsGrid'
import EnrollmentSection from './components/EnrollmentSection'
import PerformanceSection from './components/PerformanceSection'
import TopChampions from './components/TopChampions'
import AllStudentsSection from './components/AllStudentsSection'

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <TopHeader/>
      <StatsGrid/>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <EnrollmentSection />
        <PerformanceSection/>
      </div>
        <TopChampions/>
        <AllStudentsSection/>
    </div>
  )
}

export default Dashboard
