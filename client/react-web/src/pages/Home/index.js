import React, { useState, useEffect } from 'react';

import api from '../../services/api'
import Header from '../Header'

import './style.css'

export default function Home(){

    const [datas, setDatas] = useState([])

    useEffect(() => {
        api.get('register').then(res => {
            setDatas(res.data) 
        })
    },[])
    
    return(
        <div>
            <Header />
            <h1>Home</h1>
            <table className="table-container">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    {datas.map(data => (
                        <tr key={data.id}>
                            <td>{ data.name }</td>
                            <td>{ data.email }</td>
                            <td>{ data.created_at }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}