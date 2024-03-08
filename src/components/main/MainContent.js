import React from 'react'
import Header from './Header'
import Cards from './Cards'
import ChatArea from './ChatArea'

const MainContent = () => {
     return (
          <div className='main-content w-full '>
               <Header />
               <div className='main-area-wrapper md:px-3 px-0 flex justify-center items-end w-full h-[90vh] overflow-scroll'>
                    <div className='content-wrapper'>
                         <Cards />
                          <ChatArea />
                    </div>
               </div>
          </div >
     )
}

export default MainContent
