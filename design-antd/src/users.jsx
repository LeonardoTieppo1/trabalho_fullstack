import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
export const Users = (props) => {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        getUsers();
    },[])

    const getUsers = async (event) =>{
    try {
        const response = await fetch('http://localhost:3000/usuarios', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json'
            },
        });
        const responseData = await response.json();
        setUsers(responseData)
        console.log(responseData);
    } catch (err) {
    console.log(err);
    }
}
const columns =[
    {title:"Nome",
    dataIndex:"nome",
    key:"nome"},
    {title:"Pontos",
    dataIndex:"pontos",
    key:"pontos"}
]
    // const menu=(Menu)=>{
    //     <Menu>
    //         <Menu.Item key="1"></Menu.Item>
    //     </Menu>
    // }
   return  <div style={{marginTop:10,marginRight:10, width:500}}>  
            <Table columns={columns} dataSource={users} bordered
        pagination={false}
        size="medium"
        className="custom-table"/>          
        {/*<div style={{marginTop:10}}>
            <Dropdown menu={[{label:"Item 1",key:1}]}>
                <a className="ant-dropdown-link" onClick={e=>e.preventDefault()}>Space</a>    
            </Dropdown>
        </div> */}
        </div>
}