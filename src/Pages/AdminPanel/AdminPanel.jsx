import React from 'react'
import { AdminPanelC } from './StyleAdminPanel'
import SideBarAdmin from '../../components/Admin/sideBarAdmin/SideBarAdmin'
import Setting from '../../components/Admin/templates/Setting/Setting'

const AdminPanel = () => {
  return (
    <AdminPanelC>
      <SideBarAdmin />
      <div className='outline-panel'>
        <Setting />
      </div>
    </AdminPanelC>
  )
}

export default AdminPanel
