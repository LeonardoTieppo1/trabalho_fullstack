import {React} from 'react';
import { Input} from "antd";
import { useState } from "react";
import {Button} from "antd";

export const Login = (props) => {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    
    const updateUsername = (event) =>{
            setUsername(event.target.value)
    }
    const updatePassword = (event) =>{
        setPassword(event.target.value) 
    }
    const login = async (event)  =>{
    try {
        const response = await fetch('http://localhost:3000/usuario/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            username: username,
            senha: password
            })
        });
        const responseData = await response.json();
        console.log(responseData);
    } catch (err) {
    console.log(err);
    }
}
    // const menu=(Menu)=>{
    //     <Menu>
    //         <Menu.Item key="1"></Menu.Item>
    //     </Menu>
    // }
   return  <div style={{marginTop:10,marginRight:10, width:500}}>            
            
            <div style={{display: "flex"}}><Input addonBefore="Username"placeholder="Insert your username" value={username}
            onChange={updateUsername}/>
            
            </div>
            
            <div style={{display: "flex"}}><Input addonBefore="Password"placeholder="Insert your password" value={password}
            onChange={updatePassword}/>
            <Button onClick={login}>Display</Button>
            </div>
        {/*<div style={{marginTop:10}}>
            <Dropdown menu={[{label:"Item 1",key:1}]}>
                <a className="ant-dropdown-link" onClick={e=>e.preventDefault()}>Space</a>    
            </Dropdown>
        </div> */}
        </div>
}