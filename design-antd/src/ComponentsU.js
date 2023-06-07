
import { ClockCircleOutlined } from "@ant-design/icons";
import { Row,Col, Card, Timeline, Form, Input} from "antd";
import { Button } from "antd";
import React from "react";

export const ComponentsU =(props)=>{
    return <div style={{margin:20}}>
        <Row>
            <Col span={8}><Button style={{width:"100%"}}>Botão 1</Button></Col>    
            <Col span={8}><Button style={{width:"100%"}}>Botão 2</Button></Col>
            <Col span={8}><Button style={{width:"100%"}}>Botão 3</Button></Col>
            <Row gutter={[5,5]}>
            <Col span={12}><Card title="Atividade 1" style={{width:"100%"}}>Descrição</Card></Col>
            <Col span={12}><Card title="Atividade 2" style={{width:"101%"}}>Descrição</Card></Col>
            </Row>
            <Row style={{marginTop:20,paddingLeft:20}}>
                <Col>
                    <Timeline>
                        <Timeline.Item >Atividade1</Timeline.Item>
                        <Timeline.Item dot={<ClockCircleOutlined/>}>Atividade2</Timeline.Item>
                        <Timeline.Item>Atividade3</Timeline.Item>
                        <Timeline.Item>Atividade4</Timeline.Item>
                    </Timeline>
                </Col>
            </Row>
        </Row>
        <Row style={{marginTop:20}}>
            <Col>
                <Form name="login" onFinishFailed={(erros)=>console.log(erros)} onFinish={(dados)=>alert(dados.user)}>
                    <Form.Item label="user:" name="user" rules={[{required:true,message:"Insert your user"}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label="password:" name="pass" rules={[{min:6,message:"Min 6 digits"}]}>
                        <Input type="password"/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Login</Button>
                    </Form.Item>
                </Form>    
            </Col>           
        </Row>
    </div>
}