import React from 'react'
import './Home.css'
import Homesearch from './Homesection/Homesearch/Homesearch'
import Homeuserlist from './Homesection/Homeuserlist/Homeuserlist'

const Home = () => {
  return (
   <section id ="home_page">
        <div className='container'>
          <div className='home_page_wrapper'>
            <Homesearch/>
            <div className='home_page_flex'>
              <Homeuserlist/>
            </div>
          </div>
        </div>
   </section>
  )
}

export default Home