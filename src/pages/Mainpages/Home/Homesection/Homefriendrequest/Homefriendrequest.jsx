import React, { useEffect, useState } from 'react'
import './Homefriendrequest.css'
import Grouphead from '../../../../../Component/Groupshead/Grouphead'
import { getDatabase, ref, onValue , set , push ,remove } from "firebase/database";
import { useSelector, useDispatch } from 'react-redux'

const Homefriendrequest = () => {
    const db = getDatabase();
    const data = useSelector((state) => state.alldata.value)
    const [request , setRequest] = useState([])

    useEffect (()=>{
        const requestListRef = ref(db, 'friendrequest');
            onValue(requestListRef, (snapshot) => {
                let array = []
                snapshot.forEach((item)=>{
                   if(data.uid == item.val().receiverid){
                        array.push({...item.val(),id:item.key})
                   }
                })
                setRequest(array)
        });
    },[])
    console.log(request)
                //request delete
    let requestdelete =(deleteinfo)=>{
        remove(ref(db , "friendrequest/" + deleteinfo.id))
        alert("delete done")
    }
                //request accept and creat a new data base name friendlist
    let requestAccept = (requestAcceptinfo)=>{
        set(push(ref(db , "friendlist")),{
                //who sender request
            whosenderid : requestAcceptinfo.senderid,
            whosendername : requestAcceptinfo.sendername,
            whosenderimg : requestAcceptinfo.senderimg,
            whosenderemail : requestAcceptinfo.senderemail,
                //who receive request
            whoreceivid : data.uid,
            whoreceivname :data.displayName,
            whoreceivemail : data.email,
            whoreceivimg :data.photoURL,
        }).then (()=>{
            remove(ref(db, 'friendrequest/' + requestAcceptinfo.id))
        })
        alert("Accept Succesful")
        console.log(requestAcceptinfo)
    }
  return (
    <section id='homefriendrequest'>
        <div className='homefriendrequest_wrapper'>
            <div className='homefriendrequest_user_box'>
                <Grouphead grouphead="Friend Request"/>
                <div className='homefriendrequest_wrapper_box_flex'>
                    {   
                        request && request.length > 0
                        ?
                        request.map((item , index)=>(
                            <div key={index} className='homefriendrequest_profile_wrapper'>
                                <div className='homefriendrequest_profile_box'>
                                    <div className='homefriendrequest_list_profile_image'>
                                        <img src={item.senderimg} alt="not found" />
                                    </div>
                                    <div className='homefriendrequest_profile_name'>
                                        <h4 className='homefriendrequest_profile_friend_name'>{item.sendername}</h4>
                                    </div>
                                </div>
                                <div className='homefriendrequest_profile_add_btn'>
                                        <button onClick={()=> requestdelete(item)} className='homefriendrequest_profile_btn'>
                                            Delete
                                        </button>
                                        <button onClick={()=> requestAccept(item)} className='homefriendrequest_profile_btn'>
                                            Accept
                                        </button>
                                </div>
                            </div>
                        ))
                        :
                        "data nai"
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Homefriendrequest