import React from 'react'
import { SearchOutlined } from '@ant-design/icons'

export const Search = () => {

    const searchStyle = {
        borderRadius: "30px",
        border: "none",
        height: "30px",
        padding: 10,
        fontSize: 20,
        backgroundColor: "#F9FBFF",
        display: "flex",
        alignItems: "center"
    }

    return (
        <div style={searchStyle}>
            <SearchOutlined sx={{ color:'#898B8E'}} style={{fontSize: 24}}/>
            <input style={{all: "unset", fontSize: 20, width: "100%"}} placeholder={"Search"}/>
        </div>
    )
}
