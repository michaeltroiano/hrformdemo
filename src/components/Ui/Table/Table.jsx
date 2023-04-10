import React from 'react'
import './Table.css'

export const Table = (props) => {
    const { data, tableDataFilter } = props

  
    const headerStyle = {
        color: "lightGrey",
        textAlign: "left",
        fontSize: 20,
        position: "sticky",
        top: 0,
        backgroundColor: "#fff"
    }

    const tableStyle = {
        width: "100%",
    }

    const rowStyle = {
        height: 100
    }

    const dataStyle = {
        fontSize: 20,
        fontWeight: "bold"
    }

    const formatHeaderText = (headerText) => {
        let output = headerText.replace("_", " ")
        output = output.replace(/\w\S*/g, function(txt){
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
        return output
    }

    return (
        <div id="table-wrapper" style={{maxHeight: '80vh', overflow: "auto", }}>
            {data && data.length > 0 && 
                <table style={tableStyle}>
                    <tr style={rowStyle}>
                        {Object.keys(data[0]).map((header, i) => {
                            return <th key={i} style={headerStyle}>{formatHeaderText(header)}</th>
                        })}
                    </tr>
                    {data.map((row, ii) => {
                        return <tr key={ii} style={rowStyle} >
                            {Object.keys(row).map((key, iii) => {
                                return <td key={iii} style={dataStyle} >
                                    {tableDataFilter(row, key)}
                                </td>
                            })}
                        </tr>
                    })}
                </table>
            }
        </div>
    )
}

