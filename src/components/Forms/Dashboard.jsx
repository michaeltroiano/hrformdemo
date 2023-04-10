import React from 'react'
import { Table } from '../Ui/Table/Table'
import { Pill } from '../Ui/Pill'
import {formData} from '../../MockData'
import { Search } from '../Ui/Search'
import { Sort } from '../Ui/Sort'
import { FilePdfOutlined } from '@ant-design/icons'


export const Dashboard = () => {
    const data = formData

    const sortOptions = [
        {
            label: "Newest",
            value: "newest"
        },
        {
            label: "Oldest",
            value: "oldest"
        }
    ]

    const tableDataFilter = (row, key) => {
        let output
        switch (key) {
            case "Status":
                output = <Pill value={row[key]} color={row[key] === "Complete" ? "success" : "warning"} />
                break
            case "Link":
                output = row[key] ? <a href={row[key]} target='_blank' rel="noreferrer" style={{color: "#0086AF"}}><FilePdfOutlined style={{fontSize: 40}}/></a> : ""
                break
            default:
                output = row[key]
        }

        return output
    }

    return (
        <div style={{padding: 25, paddingLeft: 50}}>
            <div style={{display: "flex", flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', marginBottom: 50}}>
                <div style={{minWidth: 'fit-content', fontWeight: "775", fontSize: 50}}>
                    All Forms
                </div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: 'center'}}>
                    <div style={{minWidth: 400, marginRight: 50}}>
                        <Search placeholder='Search' allowClear size={'large'} />
                    </div>
                    <div style={{minWidth: 300, marginRight: 50}}>
                        <Sort options={sortOptions}/>
                    </div>
                </div>
            </div>
            <div >
                <Table data={data} tableDataFilter={tableDataFilter} />
            </div>
        </div>
    )
}
