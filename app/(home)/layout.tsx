import Logo from "@/components/Logo"
import DarkMode from "@/components/DarkMode"
import {UserButton} from "@clerk/nextjs"
import { Button } from "@/components/ui/button"


const layout = ({children}:{
    children:React.ReactNode
}) => {

  return (
    <div>

        <div className='border-b'>

<nav className='flex items-center justify-between max-w-7xl mx-auto py-2'>
<Logo/>
<div className='flex items-center gap-3'>

<Button variant={'link'} className='font-bold border px-3 py-2 bg-slate-900 text-gray-200  dark:bg-gray-200 dark:text-slate-900'>Dashboard</Button>
<UserButton/>
<DarkMode/>
</div>

</nav>
        </div>

        {children}
    </div>
  )
}

export default layout