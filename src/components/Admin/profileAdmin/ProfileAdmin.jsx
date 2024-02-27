import React from 'react'
import { ProfileAdminC } from './StyleProfileAdmin'
import doc from './../../../media/doc2.jpg'
import { useThemeContext } from '../../../hooks/useContexts'
const ProfileAdmin = () => {
  const theme = useThemeContext()
  return (
    <ProfileAdminC theme={theme}>
      <div className="profile">
        <img src={doc} alt="" />
      </div>
      <div className="information">
        <p className="name">دکتر میرمحمدی</p>
        <p className="3">
          متخصص مغز و اعصاب
        </p>
      </div>
    </ProfileAdminC>
  )
}

export default ProfileAdmin
