import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const GenerateFormInput = () => {
  return (
    <div className='flex items-center gap-4 my-8'>

       <Input placeholder="Enter a prompt to generate form..."  type='text'  />
       <Button className='bg-gradient-to-r from-blue-500 to-purple-600 font-semibold '>Generate Form</Button>
    </div>
  )
}

export default GenerateFormInput

