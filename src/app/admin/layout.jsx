import SideBar from '@/components/ui/sidebar'
import React from 'react'

const AdminLayout = ({children}) => {
  return (
    <div className="flex h-screen bg-gray-200 dark:bg-gray-900">
      <SideBar />
      {children}
    </div>
  )
}

export default AdminLayout
