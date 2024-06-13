import React from 'react'

function ExpertCard({expert}) {
  return (
    <div className=' w-48 h-44 bg-gray-900 rounded-md p-10 '>
    <h3 >{expert.name}</h3>
    <p>{expert.expertise}</p>


    </div>
  )
}

export default ExpertCard