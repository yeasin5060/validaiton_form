import React from 'react'
import './Homeuserlist.css'
import Grouphead from '../../../../../Component/Groupshead/Grouphead'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const Homeuserlist = () => {
  return (
   <section id='homeuserlist'>
        <div className='homeuserlist_wrapper'>
            <div className='homeuserlist_user_box'>
                <Grouphead grouphead="User List"/>
                <div className='homeuserlist_wrapper_box_flex'>
                    {
                        [ 1 , 2 , 3 , 4 ,5 , 6 , 7 , 8 ].map((item , index)=>(
                            <div key={index} className='homeuserlist_profile_wrapper'>
                                <div className='homeuserlist_profile_box'>
                                    <div className='homeuserlist_list_profile_image'>
                                        <img src="" alt="" />
                                    </div>
                                    <div className='homeuserlist_profile_name'>
                                        <h4 className='homeuserlist_profile_friend_name'>Raghav</h4>
                                        <h5 className='homeuserlist_profile_online'>56pm</h5>
                                    </div>
                                </div>
                                <div className='homeuserlist_profile_add_btn'>
                                        <button className='homeuserlist_profile_btn'>
                                            <FaPlus className='homeuserlist_profile_add' />
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

export default Homeuserlist