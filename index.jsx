'use strict'

// require('./index.css')
// require('./theme/hackerone.css')
//
require('./style/index.scss')

import {findDOMNode} from 'react-dom'

global.findDOMNode = findDOMNode
import DateFormatInput from './src/DateFormatInput'
import MonthView from './src/MonthView'

import DatePicker from './src/Calendar'
import TimePicker from './src/TimePicker'
import TimeInput from './src/TimeInput'

import TransitionView from './src/TransitionView'
import DecadeView from './src/DecadeView'
import YearView from './src/YearView'
import HistoryView from './src/HistoryView'
import NavBar from './src/NavBar'
import Calendar from './src/Calendar'
import Footer from './src/Footer'
import MultiMonthView from './src/MultiMonthView'
import BasicMonthView from './src/BasicMonthView'
import DateField from './src/DateField'
import Clock from './src/Clock'
import DateFormatSpinnerInput from './src/DateFormatSpinnerInput'
import { Flex, Item } from 'react-flex'

var moment = require('moment');
var React      = require('react')
var render = require('react-dom').render

var App = React.createClass({


    render: function(){

        let rendong_time = '2015-04-24 10:38:45'
        return <div style={{margin: 10}}>
        <h1>testing</h1>
        <div>
          <DateField forceValidDate={true}  clearButton={false}
          todayButtonText={'nownownow2'}  defaultValue={rendong_time} updateOnDateClick={false}  dateFormat="YYYY-MM-DD HH:mm:ss"/>
          <TransitionView transitionDuration="0.1s">
           <Calendar style={{padding: 10}}/>
            {/*<MonthView dateFormat="DD/MM/YYYY" defaultDate="20/04/2016" onChange={() => {}}/>*/}
          </TransitionView>
        </div>
        <hr/>


        <br />


        </div>
    }
  })

render(<App />, document.getElementById('content'))
