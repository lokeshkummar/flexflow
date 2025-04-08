import { SignUp } from '@clerk/clerk-react'
import React from 'react'

const SignUpPage = () => {
  return (
    <div className='min-h-screen pt-28 pb-10 w-full flex justify-center items-center bg-gradient-to-bl from-green-400 to-black'>
        <SignUp path='/sign-up' routing='path' />
    </div>
  )
}

export default SignUpPage