import React from 'react'
import './Homesearch.css'

const Homesearch = () => {
  return (
    <section id='home_search'>
       <div className='home_search_input_box'>
        <input className='home_search_input' type='search' placeholder='Search'/>
       </div>
    </section>
  )
}

export default Homesearch