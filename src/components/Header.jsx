import React from 'react'
import { EditOutlined } from '@ant-design/icons'
import { Pill } from './Ui/Pill'

export const Header = () => {

    const headerStyle ={
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "95vw",
        height: 61,
        backgroundColor: "#0086AF",
        top: 0,
        left: 0,
        paddingLeft: 30,
        paddingRight: 500,
        fontSize: 30,
        color: "#fff",
        fontWeight: "bold"
    }

    return (
        <div style={headerStyle}>
            <div style={{display: "flex", alignItems: "center"}}>
                <EditOutlined fontSize='large' style={{ paddingRight: 10}}/>
                HR Form Pro
            </div>
            <Pill value={"Contact Us"} color="link" style={{maxHeight: 20, fontSize: 15}}/>
        </div>
    )
}
