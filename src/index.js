import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message } from 'antd';
// The default locale is en-US, but we can change it to other language
import moment from 'moment';
import 'moment';
import 'antd/dist/antd.css';
import { EventColor, UserAvatar, Time} from './app/elements/index.js';

console.log(EventColor);

moment.locale('fr');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  handleChange(date) {
    message.info('Selected Date: ' + date.toString());
    this.setState({ date });
  }
  render() {
    return (
        <div style={{ width: 400, margin: '100px auto' }}>
          <EventColor/>
          <EventColor size="medium"/>
          <EventColor size="large"/>
          <UserAvatar name="Rajesh Kumar" showFullName={true}/>
          <UserAvatar trimString={false}/>
          <div>
          <Time />
          </div>
          <DatePicker onChange={value => this.handleChange(value)} />
          <div style={{ marginTop: 20 }}>Date: {this.state.date.toString()}</div>
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));