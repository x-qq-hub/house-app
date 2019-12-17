import React from 'react';
import { Flex, List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import { Link } from 'react-router-dom'

export default class Login extends React.Component {
    state={
        phoneNum:'',
        pwd:''
    };
    getphoneNum=(phoneNum)=>{
        this.setState({
            phoneNum
        })
        console.log(1,phoneNum);
        
    }
    getphoneNum=(pwd)=>{
        this.setState({
            pwd
        })
        console.log(2,pwd);
        
    }
    render() {
        let {phoneNum,pwd}=this.state
        console.log(phoneNum,pwd);
        
        return (
            <div id="login">
                <Flex justify="center" style={{ margin: 50 }}>
                    <img src={require('../assets/imgs/logo.png')} style={{ width: 150, height: 150 }} />
                </Flex>
                <WingBlank size="lg">
                    <List>
                        <InputItem type='phone' placeholder="请输入手机号" value={phoneNum}  onChange={this.getphoneNum} >
                            <div style={{ backgroundImage: `url(${require('../assets/imgs/user.png')})`, backgroundSize: 'cover', height: '30px', width: '30px' }} />
                        </InputItem>
                        <InputItem type="password" placeholder="请输入密码" value={pwd} onChange={this.getpwd}>
                            <div style={{ backgroundImage: `url(${require('../assets/imgs/pwd.png')})`, backgroundSize: 'cover', height: '30px', width: '30px' }} />
                        </InputItem>
                        <WhiteSpace size="xl" />
                    </List>
                    <Button style={{ background: '#00BC5B', color: '#fff' }}>登录</Button>
                    <WhiteSpace size="xl" />
                    <Flex justify='between' >
                        <Link to='/regist' style={{color:'#43CE86'}}>手机快速注册</Link>
                        <Link to='/forgot' style={{color:'#43CE86'}}>忘记密码</Link>
                    </Flex>
                </WingBlank>
                <Flex justify="center" style={{ marginTop: 150 }}>
                    <p style={{color:'#888'}}>登录/注册代表同意《黑市的霸王条款》</p>
                </Flex>
            </div>
        )
    }
}