// Home page search n filter sidebar

import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const tags = ['lofi', 'pop', 'metal', 'afrobeat'];

const SideBar = () => {
  return (
    <div className='m-2 shadow-sm shadow-slate-300 p-3 h-full'>
        <div className='bg-white rounded-2xl p-1 mx-2'>
            <SearchIcon />
            <input className='outline-0 rounded-r-2xl' placeholder='Search Beats or Artists'/>
        </div>
        <div className='pb-8 border-b-2 border-gray-300 cursor-pointer'>
            <h2 className='my-4 w-fit'>Filter By</h2>
            <div className='bg-white p-2 mb-3 rounded-xl flex justify-between mx-2'>
                Instruments
                <ArrowRightIcon />
            </div>
            <div className='bg-white p-2 rounded-lg flex justify-between mx-2 cursor-pointer'>
                Mood
                <ArrowRightIcon />
            </div>
        </div>
        <div className=''>
            <h2 className='my-4 w-fit'>Tags</h2>
            <div className='flex flex-wrap mx-2 justify-between'>
                {tags.map((tag, id) => (
                    <div className='w-1/2 p-1 cursor-pointer'>
                        <div
                            key={id}
                            className='p-1 bg-violet-600 text-white rounded-xl'
                        >
                            {tag}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default SideBar