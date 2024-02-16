import React from 'react'
import './Homemygroups.css'
import Grouphead from '../../../../../Component/Groupshead/Grouphead'

const Homemygroups = () => {
  return (
    <section id='homemygroups'>
        <div className='homemygroups_wrapper'>
            <div className='homemygroups_user_box'>
                <Grouphead grouphead="My Groups"/>
                <div className='homemygroups_wrapper_box_flex'>
                    {
                        [ 1 , 2 , 3 , 4 ,5 , 6 , 7 , 8 ].map((item , index)=>(
                            <div key={index} className='homemygroups_profile_wrapper'>
                                <div className='homemygroups_profile_box'>
                                    <div className='homemygroups_list_profile_image'>
                                        <img src="" alt="" />
                                    </div>
                                    <div className='homemygroups_profile_name'>
                                        <h4 className='homemygroups_profile_friend_name'>Raghav</h4>
                                        <h5 className='homemygroups_profile_online'>Hosen</h5>
                                    </div>
                                </div>
                                <div className='homemygroups_profile_add_btn'>
                                    <button className='homemygroups_profile_btn'>
                                        Today 8:00 PM
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

export default Homemygroups