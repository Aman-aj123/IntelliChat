import React from 'react'

const ChatArea = () => {
     return (
          <div className='chat-container mb-2 mt-4'>
               <div className='w-full items-center pl-2 h-[53px] rounded-xl  overflow-hidden border-2 border-gray-400 hover:shadow-xl transition bg-gray-100 flex flex-between'>
                    <input type="text" className='w-full outline-none leading-normal h-full bg-transparent' placeholder='Message to IntelliChat...' />
                    <img className="cursor-pointer h-[auto] w-[30px] hover:opacity-60 transition" src="https://static.thenounproject.com/png/120421-200.png" />
               </div>
               <h2 className='text-center text-gray-600 mt-1 text-sm'>IntelliChat can make mistakes. Consider checking important informations.</h2>
          </div>
     )
}

export default ChatArea
