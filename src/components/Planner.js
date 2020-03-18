import React from 'react'
import '../App.css'

const Planner = ({ plannerData, onChange }) => {
  const newArray = Array.from(Array(24).keys())

  const data = newArray.map((item, index) => {
    return [
      plannerData[0][index],
      plannerData[1][index],
      plannerData[2][index],
      plannerData[3][index],
      plannerData[4][index],
      plannerData[5][index],
      plannerData[6][index],
    ]
  })

  const handleChange = (hour, weekDay, checked) => {
    onChange(hour, weekDay, checked)
  }

  return (
    <table id="tableDownload" class="content-table">
      <thead>
        <tr>
          <th></th>
          <th>Dom</th>
          <th>Seg</th>
          <th>Ter</th>
          <th>Qua</th>
          <th>Qui</th>
          <th>Sex</th>
          <th>Sab</th>
        </tr>
      </thead>
      <tbody>
        {data.map((hour, hourIndex) => (
          <tr key={hourIndex}>
            <td>{hourIndex}</td>
            {hour.map((weekDayChecked, weekDayIndex) => (
              <td
                key={weekDayIndex}
                onClick={() =>
                  handleChange(hourIndex, weekDayIndex, weekDayChecked)
                }
                style={{
                  backgroundColor: weekDayChecked
                    ? 'hsla(213,  49%, 34%, 1)'
                    : 'white',
                }}
              ></td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Planner
