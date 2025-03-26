import React from 'react'

function ServiceCard(Servicetitle,Servicedescription) {
  return (
    <div className='ServiceCard'>
        <h2>{Servicetitle}</h2>
        <p>{Servicedescription}</p>
    </div>
  )
}

export default ServiceCard

