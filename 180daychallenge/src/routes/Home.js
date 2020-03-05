import React, {Fragment} from 'react';

import Grid from '../components/Grid';
import {dailyData, meta} from './data';
import './home.scss';

export default class Home extends React.Component {

    toFullPicture = () => {
        this.props.history.push('/full')
    }

    render() {
        return <Fragment>
            <div className="main-grid-container">
                <Grid {...meta} mainData={dailyData}/>
            </div>
            <div className="footer-tool">
                <p>点击格子控制显示/隐藏当日详情</p>
                <p>每日学习45分钟及以上，就可以最大程度地点亮格子</p>
                <p className="p-button"><button onClick={this.toFullPicture}>查看全图</button></p>
            </div>
        </Fragment>
    }
}
