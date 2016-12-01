/**
 * Created by rendongliu on 1/12/2016.
 */

import './style/index.scss';
import {findDOMNode} from 'react-dom';
import Calendar from './src/Calendar';
import DateField from './src/DateField';
import React from  'react';
import { render } from 'react-dom';

const hue_time = "2016-08-27 14:23:21";
class LogtimePicker extends React.Component{
    render(){
        return(
                <DateField forceValidDate={true}  onChange={this.props.onChange} clearButton={false}
                           todayButtonText={'Now'}  defaultValue={hue_time} updateOnDateClick={false}  dateFormat="YYYY-MM-DD HH:mm:ss">
                    <Calendar/>
                </DateField>
        )
    }
}

export default LogtimePicker;
