import React from 'react'

function Button(props) {
  return (
    <button style={{width: 300, color: 'red', fontSize: '10px', backgroundColor: 'hsla(241, 100%, 40%, 1)'}}>{props.text}</button>
  )
}

export default Button
