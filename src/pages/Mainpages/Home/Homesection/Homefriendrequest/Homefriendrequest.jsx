import React from 'react'
import './Homefriendrequest.css'
import Grouphead from '../../../../../Component/Groupshead/Grouphead'

const Homefriendrequest = () => {
  return (
    <section id='homefriendrequest'>
        <div className='homefriendrequest_wrapper'>
            <div className='homefriendrequest_user_box'>
                <Grouphead grouphead="Friend Request"/>
                <div className='homefriendrequest_wrapper_box_flex'>
                    {
                        [ 1 , 2 , 3 , 4 ,5 , 6 , 7 , 8 ].map((item , index)=>(
                            <div key={index} className='homefriendrequest_profile_wrapper'>
                                <div className='homefriendrequest_profile_box'>
                                    <div className='homefriendrequest_list_profile_image'>
                                        <img src="" alt="" />
                                    </div>
                                    <div className='homefriendrequest_profile_name'>
                                        <h4 className='homefriendrequest_profile_friend_name'>Raghav</h4>
                                        <h5 className='homefriendrequest_profile_online'>Hosen</h5>
                                    </div>
                                </div>
                                <div className='homefriendrequest_profile_add_btn'>
                                        <button className='homefriendrequest_profile_btn'>
                                        Accept
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

export default Homefriendrequest