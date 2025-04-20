import React, { useState } from 'react'
import Markdown from 'react-markdown'
import axios from "axios"
import { Bot, UserRound } from 'lucide-react';

const Blogs = () => {

  const [prompt, setPrompt] = useState('')
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)
  const [displayText, setDisplayText] = useState('')

  const handleChange = (e) => {
    setPrompt(e.target.value)
  }

  const handleKeyPress = (e) => {
    if (e.key ==='Enter' && !loading) {
      AIoutput();
    }
  }

  const url = import.meta.env.VITE_BASE_URL
  if (!url) {
    console.log("base url not found!");

  }
  const AIoutput = async () => {
    setDisplayText(prompt)
    setLoading(true)
    try {
      const response = await axios.post(`${url}/ai/get-res`, { prompt })
      setOutput(response.data);
    } catch (error) {
      console.error("axios error:", error.message);
      if (error.response) {
        // The server responded with a status code outside the 2xx range
        console.error("Error data:", error.response.data);
        console.error("Error status:", error.response.status);
        console.error("Error headers:", error.response.headers);
      }
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <div className='relative h-screen mb-10 w-full flex justify-center items-center text-white font-extrabold text-4xl'>
      <div className='h-full w-full '>
        <div className='h-70 w-70 bg-green-600 rounded-full blur-3xl ' ></div>
        <div className='absolute top-21 min-h-[71%] overflow-y-scroll w-full px-5 md:px-20 text-sm font-medium'>
          <div className='w-full flex gap-2 justify-end py-5'>
            <p className='max-w-[85%] md:max-w-[40%] bg-[#d0d0d035] backdrop-blur-2xl rounded-xl px-5 py-3 rounded-tr-none'>{displayText}</p>
            <UserRound className=' p-2 bg-[#d0d0d035] backdrop-blur-2xl size-8 rounded-full' />
          </div>
          {
            loading ? (<p>Thinking...</p>) : (<div className='flex gap-2'>
              <Bot className='p-2 bg-[#51515135] backdrop-blur-2xl size-10 rounded-full' />
              <div className='max-w-[85%] md:max-w-[50%] bg-[#51515135] backdrop-blur-2xl rounded-tl-none rounded-2xl p-5 '>
                <Markdown>
                  {output}
                </Markdown>
              </div>
            </div>)
          }
        </div>
      </div>
      <div className='absolute flex gap-3 shadow-md shadow-green-500 px-3 items-center bottom-5 min-h-20 min-w-[80%] border border-green-800 rounded-2xl' >
        <input
          type="text"
          placeholder='Ask Something...'
          value={prompt}
          onKeyDown={handleKeyPress}
          onChange={handleChange}
          className="h-full border-none focus:outline-none focus:ring-0 text-sm py-4 px-2 font-medium w-[95%]" />
        <button onClick={AIoutput} disabled={loading} className='px-4 py-2 cursor-pointer active:scale-95 ease-linear duration-100 text-white text-sm sm:text-lg font-semibold bg-green-500 rounded-lg'>
          {
            loading ? (<p>Loading..</p>) : (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="size-10"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z"></path></svg>
            )
          }
        </button>
      </div>
    </div>
  )
}

export default Blogs