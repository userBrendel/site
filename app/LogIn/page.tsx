import React from 'react'
import FilledButton from '../components/FilledButton'

const page = () => {
  return (

<div className='my-40 flex mx-55 gap-6'>
    <div>
       <div className='border p-10'>
        <h1 className='text-4xl mb-5'>Greetings New Customer!</h1>
        <p className='text-lg mb-5'>Create an account now and stay updated with the latest LTBF releases—be the first to experience what’s next!</p>
        <FilledButton>Create Your Account</FilledButton>
       </div>
    </div>

    <div className='border p-10'>
        <h1 className='text-4xl mb-5'>Already have an account?</h1>
        <p className='mb-5'>Sign in for an LTBF account to easily view and manage your past orders anytime, all in one place.</p>
        <p>Email:</p>
        <input className='border w-full mb-5'></input>
        <p>Password</p>
        <input className='border w-full'></input>
        <p className='text-sm text-right hover:underline mb-5'>Forget Password?</p>
        <div><FilledButton>Sign In</FilledButton></div>

    </div>
</div>

  )
}

export default page
