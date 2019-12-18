import React from 'react';
import { TabBar } from 'antd-mobile';
import Home from './Home';
import Microchat from './Microchat';
import History from './History';
import My from './My';

export default class Main extends React.Component {
    state = {
        selectedTab: 0,
        // fullScreen: false,
        list: [
            { id: 0, title: '首页', icon: 'home' },
            { id: 1, title: '微聊', icon: 'weixin' },
            { id: 2, title: '历史', icon: 'history' },
            { id: 3, title: '我的', icon: 'my'}
        ]
    };
    renderContent(id) {
        switch (id) {
            case 0:
                return <Home />
            case 1:
                return <Microchat />
            case 2:
                return <History />
            case 3:
                return <My />
            default:
                return <Home />
                break;
        }
    }

    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"//未选中的字体颜色
                    tintColor="#4FD08E"//选中的字体颜色
                    barTintColor="#fff"//tabbar 背景色
                >
                    {this.state.list.map((item) => {
                        const { id, title, icon } = item
                        return (
                            <TabBar.Item
                                title={title}
                                key={id}
                                icon={<div style={{
                                    width: '30px',
                                    height: '30px',
                                    background: `url(${require('../../assets/imgs/' + icon + '.png')}) center center /  30px 30px no-repeat`
                                }}
                                />
                                }
                                selectedIcon={<div style={{
                                    width: '30px',
                                    height: '30px',
                                    background: `url(${require('../../assets/imgs/' + icon + '_s.png')}) center center /  30px 30px no-repeat`
                                }}
                                />
                                }
                                selected={this.state.selectedTab === id}
                                onPress={() => {
                                    this.setState({
                                        selectedTab: id,
                                    });
                                }}
                                data-seed="logId"
                            >
                                {this.renderContent(id)}
                            </TabBar.Item>
                        )
                    })}
                </TabBar>
            </div>
        );
    }
}