import React from 'react';
import './Archive.less';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
// import './classify.less';
// import api from './api';
//
// const issueList = api.getIssueList();
// import api from './api';
//
//     const issueList = api.getIssueList();
//     const issues = issueList;
class Archive extends React.Component{
    componentDidMount() {
        const $issues = document.getElementsByClassName('.issue-items');
        // console.log(' $issues',issues); // eslint-disable-line
    }
    callback(key) {
        console.log(key);
    }
    render(){
        return (
            <div>
            <div className="classify-title">归档</div>
                这是归档路由跳转后文章显示页面！
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
                    <TabPane tab="选项卡二" key="2">选项卡二内容</TabPane>
                    <TabPane tab="选项卡三" key="3">选项卡三内容</TabPane>
                </Tabs>
            </div>
    )
    }
}


export default Archive;
