
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,

  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { PricingPlan, pricingPlan } from "@/lib/pricingplan"
import { Badge } from "./ui/badge"


const PricingPage = ()=>{

    return (
      <div>
        <div className='text-center mb-16 '>
  <h1 className='font-extrabold text-3xl text-slate-800 dark:text-gray-200'>Plans & Pricing</h1>
  <p className='text-gray-500 dark:text-gray-300'>Receive unlimited credits when you pay early</p>
</div>
        <div className='grid grid-cols-3 gap-6'>



{
  pricingPlan.map((plan:PricingPlan, index:number)=>(
        <Card key={index} className={`w-[350px] flex flex-col justify-between shadow-md dark:shadow-gray-300  ${plan.level==="Enterprise"? "bg-slate-900 text-white":"null"}`}>
        <CardHeader className="flex  flex-row items-center gap-2">
          <CardTitle >{plan.level}</CardTitle>
          {
            plan.level === "Pro" &&   <Badge className='rounded-full bg-gray-600 w-fit'> 🔥 Popular</Badge>
          }
        
        </CardHeader>
        <CardContent className='flex-1'>
         <p className='text-2xl font-bold '>{plan.price}</p>
         <ul className='mt-4 space-y-2'>{
          plan.services.map((item:string, index:number)=>(
<li   key={index} className='flex items-center '><span className='text-green-500  mr-2 '>✔</span> {item}</li>
          ))
          }

          </ul>
        </CardContent>
        <CardFooter >
          <Button className={`w-full ${plan.level === "Enterprise" ? "bg-gray-200 text-slate-800":"bg-slate-800 text-gray-200"} font-semibold hover:bg-null`} >Get Started with {plan.level}</Button>
      
        </CardFooter>
      </Card>
    ))
}

            </div>
            </div>
    )
}



export default PricingPage;