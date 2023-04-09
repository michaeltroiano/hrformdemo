import React, { useEffect, useState } from 'react'
import { Table } from '../Table/Table'
import { Input, Select, Form } from "antd"
import { Pill } from '../Pill'
import {formData} from '../MockData'
import { Search } from '../Ui/Search'
import { Sort } from '../Ui/Sort'


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

  return (
    <div style={{padding: 25}}>
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
            <Table data={data}/>
        </div>
    </div>
  )
}
