"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
const PageNotFound = () => {
    const router = useRouter();
  return (
<div className='h-screen w-screen flex items-center flex-col gap-5 justify-center'>
     <h1 className='font-bold text-3xl text-slate-800 '>Oops!😔 Page Not Found</h1>
     <Button className='font-bold bg-slate-800' onClick={
        ()=>router.push('/')
     }>Go to homepage</Button>
    </div>
  )
}


export default PageNotFound