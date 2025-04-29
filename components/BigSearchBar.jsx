import { Search } from 'lucide-react'
import React from 'react'

const BigSearchBar = () => {
  return (
    <div className='fixed left-1/2 top-3 -translate-x-1/2 w-[40%] px-6 py-[9px] rounded-lg border-[1px] border-gray-400 bg-gray-100 flex items-center justify-center gap-8 overflow-hidden'>
        <Search  size={20}/>
        <input type='text' className='flex-1 border-none outline-none text-sm font-medium placeholder:text-zinc-400' placeholder='Search Doctors, Specialists, Conditions etc.'></input>
    </div>
  )
}

export default BigSearchBar