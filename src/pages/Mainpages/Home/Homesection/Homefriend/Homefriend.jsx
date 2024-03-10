import React, { useState } from 'react'
import './Homefriend.css'
import Grouphead from '../../../../../Component/Groupshead/Grouphead'
import { getDatabase, ref, onValue , set , push ,remove } from "firebase/database";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';


const Homefriend = () => {
    const db = getDatabase();
    const data = useSelector((state) => state.alldata.value)
    let [friend , setFriend] = useState([])

    useEffect(()=>{
        const friendListRef = ref(db, 'friendlist');
            onValue(friendListRef, (snapshot) => {
                let array = []
                snapshot.forEach((item)=>{
                   if(data.uid == item.val(). whoreceivid || data.uid == item.val().whosenderid ){
                        array.push({...item.val(),id:item.key})
                   }
                })
                setFriend(array)
        });
    },[])
    console.log(friend);
  return (
    <section id='homefriend'>
        <div className='homefriend_wrapper'>
            <div className='homefriend_user_box'>
                <Grouphead grouphead="Friend"/>
                <div className='homefriend_wrapper_box_flex'>
                    {   friend &&
                        friend.map((item , index)=>(
                            <div key={index} className='homefriend_profile_wrapper'>
                                <div className='homefriend_profile_box'>
                                    <div className='homefriend_list_profile_image'>
                                        <img src={data.uid == item.whorsenderid ? item.whoreceivimg : item.whosenderimg} alt="not found" />
                                    </div>
                                    <div className='homefriend_profile_name'>
                                        {
                                            data.uid == item.whosenderid
                                            ?
                                            <div>
                                                <h4 className='homefriend_profile_friend_name'>{item.whoreceivname}</h4>
                                                <h5 className='homefriend_profile_online'>Hosen</h5>
                                            </div>
                                            :
                                            <div>
                                                <h4 className='homefriend_profile_friend_name'>{item.whosendername}</h4>
                                                <h5 className='homefriend_profile_online'>Hosen</h5>
                                            </div>
                                        }
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