"use client"

import React, { ChangeEvent, useActionState , useState, useEffect} from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useFormStatus } from 'react-dom'
import { Sparkles } from 'lucide-react'
import { generateForm } from '@/actions/generateForm'
import {useRouter} from "next/navigation"
import toast from 'react-hot-toast'

type InitialState = {
  message:string;
  success:boolean;
  data?:any
}
const initialState:InitialState={
  message:"",
  success:false
}

const GenerateFormInput:React.FC<{text?:string}> = ({text}) => {

  const [description, setDescription] = useState<string | undefined>("")
const [state, formAction ] = useActionState(generateForm, initialState )

const router = useRouter();

const changeEventHandler = (e:ChangeEvent<HTMLInputElement>)=>{
  setDescription(e.target.value)
}

useEffect(()=>{
  setDescription(text)
}, [text])


useEffect(()=>{
if(state.success){
  console.log("response", state.data)
  toast(state.message);
  router.push(`/dashboard/forms/edit/${state.data.id}`)

}
else if(state.message){
  toast.error(state.message)
}


},[state])

  return (
    <form  action={formAction} className='flex items-center gap-4 my-8'>

       <Input id="description"  required  name="description" value={description} onChange={changeEventHandler} placeholder="Enter a prompt to generate form..."  type='text'  />
       <SubmitButton/>
    </form>
  )
}

export default GenerateFormInput


const SubmitButton = ()=>{
  const {pending} = useFormStatus();
  return  (
    <Button disabled={pending}  className='bg-gradient-to-r from-blue-500 to-purple-600 font-semibold  h-12 '>

      <Sparkles className='mr-2' />
{
  pending ? (
    <span>
      Generating Form...
    </span>
  ):(
    "Generate Form"
  )
}

    </Button>
  )
}

