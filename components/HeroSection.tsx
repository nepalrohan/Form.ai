import React from 'react'
import GenerateFormInput from './GenerateFormInput'
import { Button } from './ui/button';

type SuggestionText = {
    label:string;
    text:string;
}



const suggestionBtnText:SuggestionText[] = [
    {
      label: "Job Application",
      text: "Develop a basic job application form that serves as a one-page solution for collecting essential information from users."
    },
    {
      label: "Event Registration",
      text: "Create a dynamic event registration form that efficiently gathers participant details, preferences, and payment information."
    },
    {
      label: "Feedback Form",
      text: "Design a user-friendly feedback form to capture valuable customer insights, ratings, and suggestions effortlessly."
    }
  ];
  
const HeroSection = () => {
  return (
 <section>
    <div className='relative '>
        <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 blur-2xl opacity-50 -z-10'>

        </div>

    <div className=' container text-center mx-auto relative '>
    <h1 className='text-4xl  font-bold '>Build Forms Effortessly Using  AI</h1>
    <p className='mt-4 text-lg text-slate-700 '>Harness the power of AI to craft stunning, dynamic forms instantly, with unmatched speed and precision</p>
</div>

    </div>
<GenerateFormInput/>

<div className='grid grid-cols-4 gap-3'>
{
    suggestionBtnText.map((item:SuggestionText, index:number)=>(
        <Button key={index} variant={'outline'} className="rounded-full h-10 border-gray-300 shadow-md">{item.label}</Button>
    ))
}
</div>
 </section>
  )}



export default HeroSection