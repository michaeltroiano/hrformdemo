import React from 'react'

export const Sort = (props) => {
    const { options } = props
    const sortStyle = {
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
        <div style={sortStyle}>
            <div style={{whiteSpace: "nowrap", marginRight: 10, color: "#898B8E"}}>
                Sort by:
            </div>
            <select style={{ all: "unset", width: "100%"}}>
                {options && options.length > 0 && options.map((option, i) => {
                    return <option value={option.value} >{option.label}</option>
                })}
            </select>
        </div>
    )
}
