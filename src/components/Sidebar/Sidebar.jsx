import React, { useState, useRef, useEffect } from 'react'
import './Sidebar.css'
import { HomeOutlined, MenuOutlined, QuestionCircleOutlined, ContactsOutlined } from '@ant-design/icons'

function useOutsideAlerter(ref, setExpanded) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setExpanded(false)
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, setExpanded]);
}

export const Sidebar = () => {
    const [expanded, setExpanded] = useState(false)
    const menuRef = useRef(null)
    useOutsideAlerter(menuRef, setExpanded);

    const iconStyle = {
        fontSize: 25
    }

    const sideBarItems = [
        {
            label: "Menu",
            path: "/",
            icon: <MenuOutlined style={iconStyle} />,
            onClick: () => setExpanded(!expanded)
        },
        {
            label: "Home",
            path: "/home",
            icon: <HomeOutlined style={iconStyle}/>
        },
        {
            label: "Contact",
            path: "/contact",
            icon: <ContactsOutlined style={iconStyle}/>
        },
        {
            label: "About Us",
            path: "/about",
            icon: <QuestionCircleOutlined style={iconStyle}/>
        },
    ]

    return (
        <div className='Sidebar' ref={menuRef}>
            { sideBarItems && sideBarItems.length > 0 && sideBarItems.map((item, i) => {
                return <div  className='SidebarItem' style={{display: 'flex', alignItems: 'center', height: 50, padding: 10, fontSize: 20, cursor: "pointer"}} onClick={() => item.onClick && item.onClick()}>
                    {item.icon}
                    <div style={{marginLeft: expanded && 20, width: expanded && 150}}>
                        {expanded && item.label}
                    </div>
                </div>
            })}
        </div>
    )
}
