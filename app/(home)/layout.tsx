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
<div className='flex items-center gap-2'>

<Button variant={'link'}>Dashboard</Button>
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