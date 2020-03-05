import React, { useState } from 'react'
import Grid from '../components/Grid';
import {dailyData, meta} from './data';

const Full = ({history}) => {
    const {width, height, picAddr} = meta;
    return (
        <div className="full">
            <Grid picAddr={picAddr} mainData={dailyData} width="100vw" height={`${100 * (height/width)}vw`} isFull={true}/>
            <p className="to-detail">
              <button onClick={() => history.push('/')}>去看每日详情</button>
            </p>
        </div>
    )
}

export default Full
