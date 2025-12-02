import React from 'react'
import AnalyticsHeader from './Components/AnalyticsHeader'
import StudentPerformance from './Components/StudentPerformance'
import SkillPerformance from './Components/SkillPerformance'
import SummaryStats from './Components/SummaryStats'
import StudentEngagementTrends from './Components/StudentEngagementTrends'

const Analytics = () => {
  return (
    <div>
      <AnalyticsHeader/>
      <SummaryStats/>
      <div className="grid grid-cols-2 gap-4">
        <StudentPerformance />
        <SkillPerformance/>
      </div>
      <StudentEngagementTrends/>
    </div>
  )
}

export default Analytics
