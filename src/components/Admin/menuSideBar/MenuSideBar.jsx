import React from 'react'
import { MenuSideBarC } from './StyleMenuSideBar'
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { TbCalendarTime } from "react-icons/tb";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

const listMenu = [
    {
        title: 'تنظیمات وبسایت', icon: <IoSettingsOutline />
    },
    { title: 'اطلاعات شما', icon: <FaRegUser /> },
    { title: 'نوبت ها', icon: <TbCalendarTime /> },
    { title: 'مدریت اعضا', icon: <AiOutlineUserAdd /> },
    { title: 'مدریت خدمات', icon: <MdOutlineMiscellaneousServices /> },
]
const MenuSideBar = () => {
    return (
        <MenuSideBarC>
            <ul>
                {listMenu.map((item, key) => {
                    return (
                        <li className='list-item' key={key}>
                            <span className='icon-list'> {item.icon} </span>
                            <span className='title-list'> {item.title} </span>
                        </li>
                    )
                })}
            </ul>
        </MenuSideBarC>
    )
}

export default MenuSideBar
