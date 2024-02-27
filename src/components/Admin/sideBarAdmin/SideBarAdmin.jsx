import React from 'react'
import { SideBarAdminC } from './StyleSideBarAdmin'
import ProfileAdmin from '../profileAdmin/ProfileAdmin'
import MenuSideBar from '../menuSideBar/MenuSideBar'

const SideBarAdmin = () => {
  return (
    <SideBarAdminC>
      <ProfileAdmin />
      <MenuSideBar />
    </SideBarAdminC>
  )
}

export default SideBarAdmin
