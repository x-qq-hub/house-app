import React, { Component } from 'react'


var map = new window.AMap.Map('container', {
    resizeEnable: true
});
export default class MapPage extends Component {

    render() {
        console.log( map.getAdcode(),map.getCenter());
        
        return (
            <div>
                <div id="container"></div>
                <div className="info">
                    <p>在初始化地图时，如果center属性缺省，地图默认定位到用户所在城市的中心</p>
                    <hr />
                    <p id='adcode'>
                        {'当前城市adcode：' + map.getAdcode() + '<br>' +
                            '当前中心点：' + map.getCenter()}
                    </p>
                </div>
            </div>
        )
    }
}
