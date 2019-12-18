import React from 'react';
import { Flex, List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import { Link } from 'react-router-dom';

import { getLogin } from '../apis/apis'


export default class Login extends React.Component {
    state = {
        phoneNum: '',
        pwd: ''
    };
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
    login = () => {
        // 获取表单数据，提交到后端
       const {phoneNum,pwd}=this.state;
        getLogin({password:pwd,phoneNum})
            .then((data) => {
                const {token}=data
                if(token){
                // 将token存到本地
                localStorage.setItem('token', token)
                console.log(localStorage.getItem('token'))
                this.props.history.replace('/');
                }else{
                    console.log('登录失败');
                }
            }
            )
    }
    render() {
        let { phoneNum, pwd } = this.state
        // console.log(phoneNum, pwd);
        return (
            <div id="login">
                <Flex justify="center" style={{ margin: 30 }}>
                    <img src={require('../assets/imgs/logo.png')} style={{ width: 150, height: 150 }} />
                </Flex>
                <WingBlank size="lg">
                    <List>
                        <InputItem type='phone' placeholder="请输入手机号" value={phoneNum} onChange={this.getphoneNum} >
                            <div style={{ backgroundImage: `url(${require('../assets/imgs/user.png')})`, backgroundSize: 'cover', height: '30px', width: '30px' }} />
                        </InputItem>
                        <InputItem type="password" placeholder="请输入密码" value={pwd} onChange={this.getpwd}>
                            <div style={{ backgroundImage: `url(${require('../assets/imgs/pwd.png')})`, backgroundSize: 'cover', height: '30px', width: '30px' }} />
                        </InputItem>

                    </List>
                    <WhiteSpace size="xl" />
                    <Button style={{ background: '#00BC5B', color: '#fff' }} onClick={this.login}>登录</Button>
                    <WhiteSpace size="xl" />
                    <Flex justify='between' >
                        <Link to='/regist' style={{ color: '#43CE86' }}>手机快速注册</Link>
                        <Link to='/forgot' style={{ color: '#43CE86' }}>忘记密码</Link>
                    </Flex>
                    <Flex justify="center" style={{ marginTop: 150 }}>
                        <p style={{ color: '#888' }}>登录/注册代表同意《黑市的霸王条款》</p>
                    </Flex>
                </WingBlank>

            </div>
        )
    }
}