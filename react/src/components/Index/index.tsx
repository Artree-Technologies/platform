import React, { FC } from 'react';

import axios from 'axios';

export default class Index extends React.Component {
    state = {
      persons: []
    }

    componentDidMount() {
      axios.get(`http://localhost:5000/api`)
        .then(res => {
          const persons = res;
          this.setState({ persons });
        })
    }

    render() {
      return (
        <ul>
          <h1>{ this.state.persons }</h1>
          <h1>Here is index</h1>
        </ul>
      )
    }
}
