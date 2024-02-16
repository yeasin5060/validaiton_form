import React from 'react'
import './Homefriend.css'
import Grouphead from '../../../../../Component/Groupshead/Grouphead'

const Homefriend = () => {
  return (
    <section id='homefriend'>
        <div className='homefriend_wrapper'>
            <div className='homefriend_user_box'>
                <Grouphead grouphead="Friend"/>
                <div className='homefriend_wrapper_box_flex'>
                    {
                        [ 1 , 2 , 3 , 4 ,5 , 6 , 7 , 8 ].map((item , index)=>(
                            <div key={index} className='homefriend_profile_wrapper'>
                                <div className='homefriend_profile_box'>
                                    <div className='homefriend_list_profile_image'>
                                        <img src="" alt="" />
                                    </div>
                                    <div className='homefriend_profile_name'>
                                        <h4 className='homefriend_profile_friend_name'>Raghav</h4>
                                        <h5 className='homefriend_profile_online'>Hosen</h5>
                                    </div>
                                </div>
                                <div className='homefriend_profile_add_btn'>
                                        <button className='homefriend_profile_btn'>
                                           Block
                                        </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
   </section>
  )
}

export default Homefriend