'use strict'


import {findDOMNode} from 'react-dom'
import React from  'react'
import { render } from 'react-dom';
import LogtimePicker from './log-time-picker'

const onChange = (dateString, { dateMoment }) => {
    console.log(dateString)
}

import { NotificationStack } from 'react-notification';
import { OrderedSet } from 'immutable';


class NotificationSystem extends React.Component {
    constructor() {
        super();
        this.state = {
            notifications: OrderedSet(),
            count:1
        };
        this.addNotification = this.addNotification.bind(this);
        this.removeNotification = this.removeNotification.bind(this);
    }

    addNotification() {
        const newCount = this.state.count + 1;
        console.log(newCount);
        this.setState((prevState) => {
            return {count: prevState.count + 1};
        });
        return this.setState({
            notifications: this.state.notifications.add({
                message: `Lazy Loading Finish`,
                key: newCount,
                action: 'X',
                onClick: (deactivate) => {
                    deactivate();
                    setTimeout(() => this.removeNotification(newCount), 400);
                },
                barStyle:{
                    left:'auto',
                    bottom:'unset',
                    top: '2rem',
                    right: '-100%',
                    padding: '1rem 1rem 1rem 1rem',
                    width: 'auto',
                    color: '#00BCD4',
                    font: '0.9rem normal Roboto, sans-serif',
                    background: 'rgba(255,255,255,0.8)',
                    boxShadow: '0 0 2px 2px rgba(10, 10, 11, .125)'
                },
                activeBarStyle:{
                    right: '1rem',
                },
                actionStyle:{
                    marginLeft: '4rem'
                },
                dismissAfter:2000
            })
        });
    }

    removeNotification(count) {
        this.setState({
            notifications: this.state.notifications.filter(n => n.key !== count)
        })
    }

    render() {
        console.log("rerender")
        return (
            <div>
            <button onClick={this.addNotification}>Add</button>
            <NotificationStack
                notifications={this.state.notifications.toArray()}
                onDismiss={notification => this.setState({
                    notifications: this.state.notifications.delete(notification)
                })}
                barStyleFactory ={(index, style) => {
                    return Object.assign({}, style, { top: 2 + index * 4 + 'rem' });
                }}
                activeBarStyleFactory ={(index, style) => {
                    return Object.assign({}, style, { top: 2 + index * 4 + 'rem' });
                }}
            />
            </div>
        );
    }
}
var App = React.createClass({

    render: function(){
        let hue_time = '2015-04-24 10:38:45'
        return <div style={{marginLeft: 500}}>
        <span>testing demo</span>
          <LogtimePicker onChange={onChange}/>
            <NotificationSystem/>
        </div>
    }
  })

render(<App />, document.getElementById('content'))
