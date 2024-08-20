'use client'
import React from 'react'
import Sidebar from './sidebar'


const layout = ({ children }) => {
    return (
        <div>
            <div className="grid grid-cols-4     gap-4">
                <div className="col-span-1">

                    <Sidebar />
                </div>
                <div className=""></div>
                {
                    children
                }
            </div>
        </div>
    )
}

export default layout
