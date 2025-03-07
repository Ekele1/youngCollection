import React, { useState } from 'react'
import AdminBoard from '../admincomponents/adminboard'
import ChatPage from '../admincomponents/message'

const ChatPagess = () => {
  const [data, setData] = useState(false)
  return (
    <AdminBoard prop={<ChatPage onsend={data}/>}/>
  )
}

export default ChatPagess