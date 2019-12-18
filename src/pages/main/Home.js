import React, { Component } from 'react'
import { Flex, Carousel } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import { WingBlank, WhiteSpace } from 'antd-mobile';

//把不是通过路由切换过来的组件中，将react-router 的 history、location、match 三个对象传入props对象上;默认情况下必须是经过路由匹配渲染的组件才存在this.props，才拥有路由参数，才能使用编程式导航的写法，执行this.props.history.push('/detail')跳转到对应路由的页面


class Home extends Component {
    state = {
        data: ['banner01.jpg', 'banner02.jpg', 'banner03.jpg'],
        imgHeight: 176,
        city: '定位中...',
        menu: [
            { id: 0, backgroundColor: "#FF5A5F", img: "home", title: "新房" },
            { id: 1, backgroundColor: "#A782B9", img: "home", title: "二手房" },
            { id: 3, backgroundColor: "#F6D149", img: "home", title: "租房" },
            { id: 4, backgroundColor: "#F9DB9F", img: "home", title: "商铺写字楼" },
            { id: 5, backgroundColor: "#FFA650", img: "home", title: "卖房" },
            { id: 6, backgroundColor: "#EAFF00", img: "home", title: "海外房产" },
            { id: 7, backgroundColor: "#EAACCC", img: "home", title: "小区房价" },
            { id: 8, backgroundColor: "#A7EDEA", img: "home", title: "问答" },
        ],
        list: [
            { id: 0, img: "List01", title: "绿地锦天府", position: "锦江区  攀成钢", specs: "4室一厅 208平", price: "19000/平" },
            { id: 1, img: "List02", title: "绿地锦天府", position: "锦江区  攀成钢", specs: "4室一厅 208平", price: "19000/平" },
            { id: 2, img: "List03", title: "绿地锦天府", position: "锦江区  攀成钢", specs: "4室一厅 208平", price: "19000/平" },
            { id: 3, img: "List01", title: "绿地锦天府", position: "锦江区  攀成钢", specs: "4室一厅 208平", price: "19000/平" },
            { id: 4, img: "List02", title: "绿地锦天府", position: "锦江区  攀成钢", specs: "4室一厅 208平", price: "19000/平" },
            { id: 5, img: "List03", title: "绿地锦天府", position: "锦江区  攀成钢", specs: "4室一厅 208平", price: "19000/平" },
        ]
    };
    componentDidMount = () => {
        // console.log(window);
        //  由于react作用域的原因，访问AMap必须在前面加上window
        window.AMap.plugin('AMap.CitySearch', () => {
            var citySearch = new window.AMap.CitySearch()
            citySearch.getLocalCity((status, result) => {
                if (status === 'complete' && result.info === 'OK') {
                    // 查询成功，result即为当前所在城市信息
                    this.setState({
                        city: result.city
                    })

                }
            })
        })
    }
    gotoCityList = () => {
        this.props.history.push('/city')
    }
    gotosSercher = () => {
        this.props.history.push('/seacher')
    }
    gotoMap = () => {
        this.props.history.push('/map')
    }
    render() {
        return (
            <div id="home">
                <Flex style={{ background: '#00BC5B' }}>
                    <Flex style={{ width: 80, color: '#fff' }} justify="center" onClick={this.gotoCityList}>
                        {this.state.city} ▼
                    </Flex>
                    <Flex style={{ background: '#fff', color: '#888', borderRadius: 25, margin: 10, flex: 1 }} onClick={this.gotosSercher}>
                        <img src={require('../../assets/imgs/seacher.png')} />
                        <p>挑好房，上超值房产App</p>
                    </Flex>
                    <Flex style={{ width: 50 }} justify="center" align="center" onClick={this.gotoMap}>
                        <img src={require('../../assets/imgs/map.png')} />
                    </Flex>
                </Flex>
                {/* 走马灯 */}
                <Carousel
                    autoplay={true}
                    infinite
                >
                    {this.state.data.map(val => (
                        <img
                            src={require(`../../assets/imgs/${val}`)}
                            key={val}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                            }}
                        />
                    ))}
                </Carousel>
                {/* 菜单栏 */}
                <WingBlank size="lg">
                    <Flex justify={"around"} wrap={'wrap'}>
                        {
                            this.state.menu.map((item) => {
                                const { id, backgroundColor, img, title } = item
                                return (
                                    <Flex direction={"column"} key={id}>
                                        <Flex justify={"center"} align={"center"} style={{ width: 70, height: 70, marginTop: 10, marginBottom: 10, backgroundColor: backgroundColor, borderRadius: 35 }}>
                                            <img src={require('../../assets/imgs/' + img + '.png')} style={{ width: 30, height: 30 }} />
                                        </Flex>
                                        <span style={{ color: '#888' }}>{title}</span>
                                    </Flex>

                                )
                            })
                        }
                    </Flex>
                </WingBlank>

                {/* 房源列表 */}

                <WhiteSpace size="xl" />
                <div className="MenuList" style={{ margin: 10 }}>
                    <p>猜你喜欢</p>
                    {
                        this.state.list.map((item) => {
                            const {id,img,title,position,specs,price}=item
                            return (
                                <Flex justify={'between'} align={'start'} key={id} style={{marginBottom:10}}>
                                    <img src={require('../../assets/imgs/' + img + '.jpg')} style={{ width: 100, height: 120, marginRight: 10 }} />
                                    <Flex justify={'between'} style={{ flex: 1 }} align={'start'}>
                                        <div >
                                            <h3 style={{ fontSize: 24, margin: 0 }}>{title}</h3>
                                            <p style={{ color: '#888' }}>{position}</p>
                                            <p style={{ color: '#888' }}>{specs}</p>
                                        </div>
                                        <span style={{ color: '#f00', fontSize: 22, fontWeight: 'bolder' }}>{price}</span>
                                    </Flex>
                                </Flex>
                            )
                        })
                    }

                </div>

            </div>
        )
    }
}

export default withRouter(Home)