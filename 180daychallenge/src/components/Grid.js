import React, {Fragment} from 'react';
import _ from 'lodash';
import dayjs from 'dayjs';

import './grid.scss'
import {getOpacity} from '../routes/data';

export default class Grid extends React.Component {

    constructor(props) {
        super(props);
        this.start = dayjs(props.startDate);
    }

    state = {
        flagMap: {}
    }

    getKey = (p, i) => p + '_' + i

    render() {
        const {width, height, picAddr, mainData, startDate, isFull} = this.props;
        const {flagMap} = this.state;
        return <div className="container" style={{width, height}}>
                <img src={picAddr}></img>
                <div className="grid-container">
                    {_.map(mainData, (item, p) => <div key={'r' + p} className="row">
                        {
                            _.map(_.range(30), i => <div
                                key={'r' + p + 'c' + i}
                                className={'cell' + (_.isNumber(item.data[i]) && flagMap[this.getKey(p, i)] ? '' : ' hide')}
                                onClick={() => this.setState({
                                    flagMap: {
                                        ...flagMap,
                                        [this.getKey(p, i)]: !flagMap[this.getKey(p, i)]
                                    }
                                })}
                                style={{
                                    backgroundColor: `rgba(2, 2, 27, ${getOpacity(item.data[i])})`
                                }}>
                                {!isFull && <Fragment>
                                    <p>{this.start.add(i, 'day').format('MM月DD日')}</p>
                                    <p>{item.data[i]}分钟</p>
                                </Fragment>}
                            </div>)
                        }
                        {!isFull && <div className="name">{item.name}</div>}
                    </div>)}
                </div>

        </div>
    }
}
