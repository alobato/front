import React, { useState } from 'react'
import Planner from './components/Planner'

const App = () => {

  const [plannerData, setPlannerData] = useState([
    [false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
  ])

  const handlePlannerChange = (hour, weekDay, checked) => {
    let newPlanner = [...plannerData]
    newPlanner[weekDay][hour] = !checked
    setPlannerData(newPlanner)
  }

  return (
    <div>
      <Planner plannerData={plannerData} onChange={handlePlannerChange} />
    </div>
  )
}

export default App
