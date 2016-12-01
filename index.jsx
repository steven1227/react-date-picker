'use strict'


import {findDOMNode} from 'react-dom'
import React from  'react'
import { render } from 'react-dom';
import LogtimePicker from './log-time-picker'

const onChange = (dateString, { dateMoment }) => {
    console.log(dateString)
}

var App = React.createClass({

    render: function(){
        let hue_time = '2015-04-24 10:38:45'
        return <div style={{marginLeft: 500}}>
        <span>testing demo</span>
          <LogtimePicker onChange={onChange}/>
        </div>
    }
  })

render(<App />, document.getElementById('content'))
