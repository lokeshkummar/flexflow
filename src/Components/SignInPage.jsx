import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const SignInPage = () => {
  return (
    <div className='min-h-screen pt-28 pb-10 w-full flex justify-center items-center bg-gradient-to-bl from-green-400 to-black'>
        <SignIn path='/sign-in' routing='path' />
    </div>
  )
}

export default SignInPage