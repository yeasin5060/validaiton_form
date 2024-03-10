import React, { useEffect, useState } from 'react'
import './Homeuserlist.css'
import Grouphead from '../../../../../Component/Groupshead/Grouphead'
import { getDatabase, ref, onValue , set , push ,remove } from "firebase/database";
import { useSelector, useDispatch } from 'react-redux'

const Homeuserlist = () => {
    const db = getDatabase();
    const data = useSelector((state) => state.alldata.value)
    let [userList , setUserList] = useState([])
    const [request , setRequest] = useState([])
    const [requestPrending , setRequestPrending] = useState([]) 

    useEffect (()=>{
        const userListRef = ref(db, 'usersdata');
            onValue(userListRef, (snapshot) => {
                let array = []
                snapshot.forEach((item)=>{
                   if(data.uid != item.key){
                        array.push({...item.val(),id:item.key})
                   }
                })
                setUserList(array)
        });
    },[])
    console.log(data);

                //send friend request
    let friendRequest = (friendRequestInfo)=>{
        set(ref(db , "friendrequest/" + friendRequestInfo.id),{
                //sender data
            sendername : data.displayName,
            senderid : data.uid,
            senderimg : data.photoURL,
            senderemail : data.email,
                //receiver data
            receivername : friendRequestInfo.username,
            receiverid : friendRequestInfo.id,
            receiverimg : friendRequestInfo.profileImage,
            receiveremail : friendRequestInfo.email
        })
        alert("Friend Request Succesful")
        console.log(friendRequestInfo)
    }

    useEffect (()=>{
        const requestListRef = ref(db, 'friendrequest');
            onValue(requestListRef, (snapshot) => {
                let array = []
                let requestarray = []
                snapshot.forEach((item)=>{
                   if(item.val().receiverid == data.uid){
                        requestarray.push(item.val().senderid + item.val().receiverid)
                   }
                   if(data.uid == item.val().senderid){
                    array.push(item.val().receiverid + item.val().senderid)
                   }
                })
                setRequest(array)
                setRequestPrending(requestarray)
        });
    },[])
    console.log(request)
    console.log(requestPrending);
  return (
   <section id='homeuserlist'>
        <div className='homeuserlist_wrapper'>
            <div className='homeuserlist_user_box'>
                <Grouphead grouphead="User List"/>
                <div className='homeuserlist_wrapper_box_flex'>
                    {
                        userList.map((item , index)=>(
                            <div key={index} className='homeuserlist_profile_wrapper'>
                                <div className='homeuserlist_profile_box'>
                                    <div className='homeuserlist_list_profile_image'>
                                        <img src={item.profileImage} alt="not found" />
                                    </div>
                                    <div className='homeuserlist_profile_name'>
                                        <h4 className='homeuserlist_profile_friend_name'>{item.username}</h4>
                                        <h5 className='homeuserlist_profile_online'>56pm</h5>
                                    </div>
                                </div>
                                <div className='homeuserlist_profile_add_btn'>
                                    {
                                        request &&
                                        request.includes(item.id + data.uid) || request.includes(data.uid + item.id)
                                        ?
                                        <div className='pendin_and_cancel_flex'>
                                            <button className='homeuserlist_profile_btn'>
                                                pendin
                                            </button>
                                            <button  className='homeuserlist_profile_btn'>
                                                Cancel
                                            </button>
                                        </div>
                                        :
                                        <button onClick={()=> friendRequest (item)} className='homeuserlist_profile_btn'>
                                        add
                                        </button>    
                                    }
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