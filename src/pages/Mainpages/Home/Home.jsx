import React from 'react'
import './Home.css'
import Homesearch from './Homesection/Homesearch/Homesearch'
import Homeuserlist from './Homesection/Homeuserlist/Homeuserlist'
import Homefriend from './Homesection/Homefriend/Homefriend'

const Home = () => {
  return (
   <section id ="home_page">
        <div className='container'>
          <div className='home_page_wrapper'>
            <Homesearch/>
            <div className='home_page_flex'>
              <Homeuserlist/>
              <Homefriend/>
            </div>
          </div>
        </div>
   </section>
  )
}

export default Home