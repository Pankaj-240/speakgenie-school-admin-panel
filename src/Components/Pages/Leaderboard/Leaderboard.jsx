import React from 'react'
import LeaderboardHeader from './components/LeaderboardHeader'
import ChampionPodium from './components/ChampionPodium'
import LeaderboardControls from './components/LeaderboardControls'
import CompleteRankings from './components/CompleteRankings'
import LeaderboardHighlights from './components/LeaderboardHighlights'

const Leaderboard = () => {
  return (
    <div>
      <LeaderboardHeader/>
      <ChampionPodium/>
      <LeaderboardControls/>
      <CompleteRankings/>
      <LeaderboardHighlights/>
    </div>
  )
}

export default Leaderboard
