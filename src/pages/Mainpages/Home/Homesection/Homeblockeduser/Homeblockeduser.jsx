import React from 'react'
import './Homeblockeduser.css'
import Grouphead from '../../../../../Component/Groupshead/Grouphead'

const Homeblockeduser = () => {
  return (
    <section id='homeblockeduser'>
        <div className='homeblockeduser_wrapper'>
            <div className='homeblockeduser_user_box'>
                <Grouphead grouphead="Blocked Users"/>
                <div className='homeblockeduser_wrapper_box_flex'>
                    {
                        [ 1 , 2 , 3 , 4 ,5 , 6 , 7 , 8 ].map((item , index)=>(
                            <div key={index} className='homeblockeduser_profile_wrapper'>
                                <div className='homeblockeduser_profile_box'>
                                    <div className='homeblockeduser_list_profile_image'>
                                        <img src="" alt="" />
                                    </div>
                                    <div className='homeblockeduser_profile_name'>
                                        <h4 className='homeblockeduser_profile_friend_name'>Raghav</h4>
                                        <h5 className='homeblockeduser_profile_online'>Hosen</h5>
                                    </div>
                                </div>
                                <div className='homeblockeduser_profile_add_btn'>
                                        <button className='homeblockeduser_profile_btn'>
                                           Unblock
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

export default Homeblockeduser