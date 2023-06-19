import React from 'react';
import { Input} from "antd";
import { useState } from "react";
import {Button} from "antd";

export const User = (props) => {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [pontos,setPontos]=useState("")
    const [latitude,setLatitude]=useState("")
    const [longitude,setLongitude]=useState("")


    const updateUsername = (event) =>{
            setUsername(event.target.value)
    }
    const updatePassword = (event) =>{
        setPassword(event.target.value) 
    }
    const updatePontos = (event) =>{
        setPontos(event.target.value) 
    }
    const updateLatitude = (event) =>{
        setLatitude(event.target.value) 
    }
    const updateLongitude = (event) =>{
        setLongitude(event.target.value) 
    }
    
    
    const usuario = async (event) =>{
    try {
        const response = await fetch('http://localhost:3000/usuario', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            username: username,
            senha: password,
            pontos:pontos,
            latitude:latitude,
            longitude:longitude
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
            <div style={{display: "flex"}}><Input addonBefore="Password"placeholder="Insert your password" type='password' value={password}
            onChange={updatePassword}/>
            </div>
            <div style={{display: "flex"}}><Input addonBefore="Pontos" placeholder="Insert your points" value={pontos}
            onChange={updatePontos}/>
            </div>
            <div style={{display: "flex"}}><Input addonBefore="Latitude"placeholder="Insert your latitude" value={latitude}
            onChange={updateLatitude}/>
            </div>
            <div style={{display: "flex"}}><Input addonBefore="Longitude"placeholder="Insert your longitude" value={longitude}
            onChange={updateLongitude}/>
            <Button onClick={usuario}>Create</Button>
            </div>
        {/*<div style={{marginTop:10}}>
            <Dropdown menu={[{label:"Item 1",key:1}]}>
                <a className="ant-dropdown-link" onClick={e=>e.preventDefault()}>Space</a>    
            </Dropdown>
        </div> */}
        </div>
}