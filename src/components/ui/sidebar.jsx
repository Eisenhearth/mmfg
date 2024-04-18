import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdHomeFilled, MdAdminPanelSettings } from "react-icons/md";
import { IoMdPeople } from "react-icons/io";

const Sidebar = () => {
  return (
    <aside className='w-72 bg-gradient-to-b from-white to-gray-100'>
        <div className='h-20 flex items-center justify-center mt-10'>
            <Image src="/logo.png" width={100} height={100} alt='mmfg-logo'/>
        </div>
        <ul className='mt-10'>
          <li className="flex items-center p-6 hover:bg-gray-100 dark:hover:bg-gray-700">
            <Link className="flex items-center space-x-7" href="#">
              <MdHomeFilled className="h-7 w-7 text-gray-500 dark:text-gray-400" />
              <span className="text-base font-medium">Dashboard</span>
            </Link>
          </li>
          <li className="flex items-center p-6 hover:bg-gray-100 dark:hover:bg-gray-700">
            <Link className="flex items-center space-x-7" href="#">
              <IoMdPeople className="h-7 w-7 text-gray-500 dark:text-gray-400" />
              <span className="text-base font-medium">Members</span>
            </Link>
          </li>
          <li className="flex items-center p-6 hover:bg-gray-100 dark:hover:bg-gray-700">
            <Link className="flex items-center space-x-7" href="#">
              <MdAdminPanelSettings className="h-7 w-7 text-gray-500 dark:text-gray-400" />
              <span className="text-base font-medium">Administrator</span>
            </Link>
          </li>
        </ul>
    </aside>
  )
}

export default Sidebar
