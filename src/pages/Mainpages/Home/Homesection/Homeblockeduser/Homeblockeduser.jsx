import React, { useState } from 'react'
import './Homeblockeduser.css'
import Grouphead from '../../../../../Component/Groupshead/Grouphead'
import { getDatabase, ref, onValue , set , push ,remove } from "firebase/database";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';

const Homeblockeduser = () => {
    const db = getDatabase();
    const data = useSelector((state) => state.alldata.value)

    let [blockList , setBlockList] = useState()

    useEffect(()=>{
       const blockListRef = ref(db, 'blockedusers');
           onValue(blockListRef, (snapshot) => {
              let array = []
           snapshot.forEach((item)=>{
               if(data.uid != item.val().whereofblockid){
                   array.push({...item.val(),id:item.key})
               }
           })
           setBlockList(array)
       });
   },[])

   let handelunblockuser = (unblockinfo)=>{
           remove(ref(db, 'blockedusers/' + unblockinfo.id))
               alert("Unblock Succesful")
   }
   console.log(blockList);
  return (
    <section id='homeblockeduser'>
        <div className='homeblockeduser_wrapper'>
            <div className='homeblockeduser_user_box'>
                <Grouphead grouphead="Blocked Users"/>
                <div className='homeblockeduser_wrapper_box_flex'>
                    {
                        blockList &&
                        blockList.map((item , index)=>(
                            <div key={index} className='homeblockeduser_profile_wrapper'>
                                <div className='homeblockeduser_profile_box'>
                                    <div className='homeblockeduser_list_profile_image'>
                                        <img src={item. whereofblockimg} alt="not found" />
                                    </div>
                                    <div className='homeblockeduser_profile_name'>
                                        <h4 className='homeblockeduser_profile_friend_name'>{item.whereofblockname}</h4>
                                    </div>
                                </div>
                                <div className='homeblockeduser_profile_add_btn'>
                                        <button onClick={()=> handelunblockuser(item)} className='homeblockeduser_profile_btn'>
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