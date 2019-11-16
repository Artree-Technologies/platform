import React, { FC } from 'react';

import axios from 'axios';

export default class Index extends React.Component {
    state = {
      message: []
    }

    componentDidMount() {
      axios.get(`http://localhost:5000/api/v1`)
        .then(res => {
          const message = res.data.message;
          this.setState({ message });
        })
    }

    render() {
      return (
        <ul>
          <h1>{ this.state.message }</h1>
          <h1>Here is index</h1>
        </ul>
      )
    }
}
