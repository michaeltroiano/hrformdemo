import React from 'react'

export const Pill = (props) => {
    const { value, type, color, style } = props

    const pillStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        maxWidth: "fit-content",
        minWidth: "100px",
        borderRadius: "20px",
        fontWeight: "bold",
        cursor: "pointer"
    }

    const colorStyle = colors[color]

    return (
        <div style={{...pillStyle, ...colorStyle, ...style}}>
            {value}
        </div>
    )
}

const colors = {
    success: {
        backgroundColor: "#ABEBDC",
        color: "#31A286"
    },
    failure: {
        backgroundColor: "#FFEBCA",
        color: "#EA8447"
    },
    warning: {
        backgroundColor: "#FFEBCA",
        color: "#EA8447"
    },
    link: {
        backgroundColor: "#181A1B",
        color: "#33CFFF"
    }
}
