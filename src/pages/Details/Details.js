import React from 'react';
import './details.less';

class Details extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            item: ''
        };
    }

    componentWillMount() {
        console.log('details',this.props); // eslint-disable-line
        this.res = this.getIssue(466181370);
    }

    getIssue(id) {
        if (id) {
            let issue = '';
            console.log('getIssue', id); // eslint-disable-line
            fetch(`./data/${id}.json`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },

            }).then(response => response.json())//解析为Promise
                .then(data => {
                    issue = data.data;
                    this.setState({
                       item:issue
                    });
                })
        }
    }

    render(){
        return (
            <div style={{display:this.props.isShow}}>
                 <div dangerouslySetInnerHTML = {{ __html:this.state.item }}></div>,
            </div>
    )
    }
}


export default Details;
