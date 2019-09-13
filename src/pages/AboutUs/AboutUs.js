import React from 'react';
import './AboutUs.less';
import {Tabs} from "antd";

const TabPane = Tabs.TabPane;
class AboutUs extends React.Component{
    componentDidMount() {
        // const $issues = document.getElementsByClassName('.issue-items');
        console.log(' $issues'); // eslint-disable-line
    }

    render(){
        return (
            <div>
    <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
            <TabPane tab="选项卡二" key="2">选项卡二内容</TabPane>
            <TabPane tab="选项卡三" key="3">选项卡三内容</TabPane>
            </Tabs>
            </div>
    )
    }
}


export default AboutUs;
