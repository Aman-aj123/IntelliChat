import React from 'react'

const Cards = () => {

     const Questions = [
          {
               title: "What is Reactjs",
               desc: "Tell me about react js what is react js means ??"
          },
          {
               title: "What is Reactjs",
               desc: "Tell me about react js what is react js means ??"
          },
          {
               title: "What is Reactjs",
               desc: "Tell me about react js what is react js means ??"
          },
          {
               title: "What is Reactjs",
               desc: "Tell me about react js what is react js means ??"
          },


     ]

     return (
          <div className='cards-wrapper w-full'>
               <h1 className='hi-text text-4xl my-3 ml-1'>Hi, developerAman</h1>
               <div className='cards-container justify-center gap-1 flex-wrap flex w-full'>
                    {
                         Questions.map((element, index) => (
                              <div key={index} className='carts-items px-1 py-2 rounded-sm bg-gray-200 cursor-pointer hover:bg-gray-300 transition min-w[160px] md:w-[49%] w-[98%]'>
                                   <h1 className='font-semibold'>{element.title}</h1>
                                   <p className='leading-5'> {element.desc}</p>

                              </div>
                         ))
                    }
               </div>
          </div>
     )
}

export default Cards