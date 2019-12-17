import React, { Component } from 'react'
import { WingBlank, List, InputItem, Radio, Flex, Button, WhiteSpace } from 'antd-mobile'
import { Link } from 'react-router-dom'
export default class Regist extends Component {
    state = {
        phoneNum: '',
        pwd: '',
    }
    getphoneNum = (phoneNum) => {
        this.setState({
            phoneNum
        })

    }
    getpwd = (pwd) => {
        this.setState({
            pwd
        })

    };
    getstata = () => {
        // 获取表单数据，提交到后端
        let { phoneNum, pwd } = this.state
        console.log(phoneNum, pwd);
    }
    render() {
        let { phoneNum, pwd } = this.state
        return (
            <div id="reg">

                <WingBlank size="lg">
                    <List style={{ marginTop: 50 }}>
                        <InputItem
                            type="phone"
                            placeholder="请输入手机号"
                            value={phoneNum} onChange={this.getphoneNum}
                            style={{ fontSize: 20 }}
                        ></InputItem>
                        <InputItem
                            type="password"
                            placeholder="请输入密码"
                            style={{ fontSize: 20 }}
                            value={pwd} onChange={this.getpwd}
                        ></InputItem>
                        <InputItem
                            type="password"
                            placeholder="请输入验证码"
                            style={{ fontSize: 20 }}
                        >
                        </InputItem>
                    </List>
                    <Flex style={{ padding: '15px' }}>
                        <Flex.Item>
                            <Radio className="my-radio" onChange={e => console.log('checkbox', e)}></Radio>
                        </Flex.Item>
                        <Flex.Item style={{ padding: '15px 0', color: '#888', flex: 'none' }}>我已同意 <Link to="/forgot" style={{ color: '#00BC5B' }}>《用户服务协议》及《隐私协议》</Link> </Flex.Item>
                    </Flex>
                    <WhiteSpace size="xl" />
                    <Button style={{ background: '#00BC5B', color: '#fff' }} onClick={this.login} onClick={this.getstata}>注册</Button>
                    <WhiteSpace size="xl" />
                    <Link to="/login" style={{ color: '#00BC5B' }}>已有账号</Link>
                </WingBlank >
            </div>
        )
    }
}
