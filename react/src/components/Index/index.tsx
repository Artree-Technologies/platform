import React, { FC } from 'react';

import axios from 'axios';

export default class Index extends React.Component {
    state = {
      persons: []
    }

    componentDidMount() {
      axios.get(`http://localhost:5000/api/v1`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })
    }

    render() {
      return (
        <ul>
          { this.state.persons }
          <h1>Here is index</h1>
        </ul>
      )
    }
}
