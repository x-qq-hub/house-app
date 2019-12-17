import React, { Component } from 'react'
import { hashHistory } from 'react-router-dom'
import {SearchBar} from 'antd-mobile'

export default class Home extends Component {
    state = {
        value: '美食',
      };
      onChange= (value) => {
        this.setState({ value });
      };
    goposition = () => {
        // {hashHistory.push("/position")}
        console.log(111);

    }
    render() {
        return (
            <div id="home">
                <header>
                    <select>
                        <option onClick={this.goposition}>成都</option>

                    </select>
                    <SearchBar
                        value={this.state.value}
                        placeholder="Search"
                        onSubmit={value => console.log(value, 'onSubmit')}
                        onClear={value => console.log(value, 'onClear')}
                        onFocus={() => console.log('onFocus')}
                        onBlur={() => console.log('onBlur')}
                        onCancel={() => console.log('onCancel')}
                        showCancelButton
                        onChange={this.onChange}
                    />
                </header>
            </div>
        )
    }
}
