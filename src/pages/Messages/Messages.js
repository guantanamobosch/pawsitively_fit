import React from 'react'
import './Messages.css'
import Dropdown from '../../components/Dropdown/Dropdown'
import MessageCard from '../../components/MessageCard/MessageCard'

export default function Messages() {
  return (
    <div>
      <h3 className='PageTitle'>My Messages</h3>
      <Dropdown />
      <MessageCard />
      <button>Send a Message</button>
    </div>
  )
}
