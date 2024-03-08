import React from 'react'
import "./Message.css"

const Message = () => {
  return (
    <section id='message_full_body'>
      <div className='container'>
        <div className='message_child_flex'>
          <div className='messaga_friend_list_box'>
              <h3 className='message_friend_list'>Friend List</h3>
          </div>
          <div className='message_messageing_box'>
              <div className='message_friend_name_box'>
                <h3 className='message_friend_name'>yeasin</h3>
                <p className='message_friend_active'>active now</p>
              </div>
              <div className='message_messageing_list_flex'>
                
              </div>
              <div className='message_text_box_flex'>
                  <input className='message_input_box' type="text" placeholder='inter your message' />
                  <div className='message_uplode_btn_box'>
                    <button className='message_uplode_btn'>send</button>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Message