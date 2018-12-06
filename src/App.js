import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timeline from 'react-calendar-timeline'
import moment from 'moment'
import 'react-calendar-timeline/lib/Timeline.css'

const groups = [
  {id: 1, title: 'group 1'},
  {id: 2, title: 'group 2'}
]

const items = [
  {id: 1, group: 1, title: 'item 1', start_time: moment(), end_time: moment().add(1, 'hour')},
  {id: 2, group: 2, title: 'item 2', start_time: moment().add(-0.5, 'hour'), end_time: moment().add(0.5, 'hour')},
  {id: 3, group: 1, title: 'item 3', start_time: moment().add(2, 'hour'), end_time: moment().add(3, 'hour')}
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">JS</header>
        <Timeline groups={groups}
          items={items}
          defaultTimeStart={moment().add(-12, 'hour')}
          defaultTimeEnd={moment().add(12, 'hour')}
        />
      </div>
    );
  }
}

export default App;
