import { Input, List, Checkbox,Radio,DatePicker,Progress,Slider, Card } from "antd";
import React from "react";
import { useState } from "react";
import {Button} from "antd";

export const ComponentsD = (props) => {
    const [username,setUsername]=useState("")

    const [radioValue,setRadioValue]=useState(1)
    const [sliderValue,setSliderValue]=useState(0)
    
    const updateUsername = (event) =>{
            setUsername(event.target.value)
    }
    const listUser= () =>{
        alert(username)
    }
    const selecionarItem= (item) =>{
        alert(item.target.id)
    }
    // const menu=(Menu)=>{
    //     <Menu>
    //         <Menu.Item key="1"></Menu.Item>
    //     </Menu>
    // }
   return  <div style={{marginTop:10,marginRight:10, width:500}}>            
            
            <div style={{display: "flex"}}><Input addonBefore="Username"placeholder="Insert your username" value={username}
            onChange={updateUsername}/>
            <Button onClick={listUser}>Display</Button>
            </div>
        <div>
            <List header="Lista de Compras" footer="Selecione os item de compras" bordered dataSource={["Café","Açúcar","Sabão"]} renderItem={(item,idx) => (<List.Item onClick={selecionarItem}id={idx}>{item}</List.Item>)}/>
         </div>
        {/*<div style={{marginTop:10}}>
            <Dropdown menu={[{label:"Item 1",key:1}]}>
                <a className="ant-dropdown-link" onClick={e=>e.preventDefault()}>Space</a>    
            </Dropdown>
        </div> */
            }
            <div style={{marginTop:10}}>
                <div><Checkbox onChange={(val)=> alert(val.target.checked)}/>Selecionar</div>
            </div>
            <div style={{marginTop:10}}>
                <Radio.Group value={radioValue} onChange={(item)=> setRadioValue(item.target.value)}>
                    <Radio key={1} value={1}>Item 1</Radio>
                    <Radio key={2} value={2}>Item 2</Radio>
                    <Radio key={3} value={3}>Item 3</Radio>
                </Radio.Group>
            </div>
            <div style={{marginTop:10}}>
                <DatePicker onChange={(data,dataString)=> alert(dataString)}></DatePicker>
            </div>
            
            <div style={{marginTop:10}}>
                <Progress type="dashboard" percent={30}/>
            </div>
            <div style={{marginBottom:10}}>
                <Slider min={0} max={6} value={sliderValue} onChange={(item)=> setSliderValue(item)}/>
            </div>
            <div style={{marginTop:10}}>
                <Card title="Item 1" bordered >
                    <ul>
                        <li>Atividade 1</li>
                    </ul>

                </Card>
            </div>
            



    </div>
}