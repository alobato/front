import React, { useState } from 'react'
import ReactToExcel from 'react-html-table-to-excel'
import Planner from './components/Planner'
import './App.css'

const App = () => {

  const [plannerData, setPlannerData] = useState([
    [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
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
      <ReactToExcel
        className='btn'
        table='tableDownload'
        filename='HorárioMédico'
        sheet='sheet 1'
        buttonText='Baixar'

      />
    </div>
  )
}

export default App
