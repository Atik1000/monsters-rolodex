import React, { Component } from 'react'
import CardList from './components/Card-list/card-list.component';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [

      ]

    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(Response => Response.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    )
  }
}
