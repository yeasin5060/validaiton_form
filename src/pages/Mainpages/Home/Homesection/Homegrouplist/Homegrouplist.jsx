import React from 'react'
import './Homegrouplist.css'
import Grouphead from '../../../../../Component/Groupshead/Grouphead'

const Homegrouplist = () => {
  return (
    <section id='homegrouplist'>
        <div className='homegrouplist_wrapper'>
            <div className='homegrouplist_user_box'>
                <Grouphead grouphead="Group List"/>
                <div className='homegrouplist_wrapper_box_flex'>
                    {
                        [ 1 , 2 , 3 , 4 ,5 , 6 , 7 , 8 ].map((item , index)=>(
                            <div key={index} className='homegrouplist_profile_wrapper'>
                                <div className='homegrouplist_profile_box'>
                                    <div className='homegrouplist_list_profile_image'>
                                        <img src="" alt="" />
                                    </div>
                                    <div className='homegrouplist_profile_name'>
                                        <h4 className='homegrouplist_profile_friend_name'>Raghav</h4>
                                        <h5 className='homegrouplist_profile_online'>Hosen</h5>
                                    </div>
                                </div>
                                <div className='homegrouplist_profile_add_btn'>
                                        <button className='homegrouplist_profile_btn'>
                                        Join
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

export default Homegrouplist