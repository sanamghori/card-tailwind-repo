import React from 'react'

const card = (props:any) => {
  return (
    <div>
      <h1>name:{props.name}</h1>
      <h2>rollnumber:{props.rollnumber}</h2>
      <h3>day: {props.day}</h3>
      <h4>timming:{props.timming}</h4>
    </div>
  )
}

export default card;

