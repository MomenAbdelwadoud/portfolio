'use client'
import React, {useState} from 'react'
import Sidebar from './Sidebar'


export default function Nav(){
    const [open, setOpen] = useState(true)
    const asideHandler = () => setOpen(!open)
    return (
    <nav >
         <div className="md:hidden">
             <button className={"flex flex-col fixed gap-1 top-20 right-12 z-30"} onClick={asideHandler}>
                <div className={"h-1 w-6 bg-gray-300 transition-transform " + (open ? " rotate-45 -mb-1" : "rotate-0 mb-0")}></div>
                <div className={"h-1 w-6 bg-gray-300 transition-transform " + (open ? " -rotate-45 -mt-1" : "rotate-0 mt-0")}></div>
                     </button>
                     <aside className={'transition-transform min-h-screen bg-black flex flex-col gap-20 pt-40 pl-10 fixed z-20 w-1/2 top-0 right-0 ' + (open ? ' translate-x-0' : ' translate-x-full')}>
                <Sidebar asideHandler={asideHandler}></Sidebar>
                     </aside>
         </div>
    </nav>
    )
}