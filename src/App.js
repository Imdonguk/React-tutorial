import React, { Component } from 'react';
import './App.css';
import PhoneForm from './components/PhoneForm'
import PhoneList from './components/PhoneList'

class App extends Component {

  state = {
    information: [
      {
        id: 0,
        name: 'woogie',
        phoneNumber: '010 - 2984 - 8307'
      },
      {
        id: 1,
        name: 'crong',
        phoneNumber: '010 - 2984 - 8307'
      },
      {
        id: 2,
        name: 'pobi',
        phoneNumber: '010 - 2984 - 5678'
      }
    ],
    keyword: ''
  }

  index = 3;

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      "information": information.filter(v => v.id !== id)
    });
  }

  handleCreate = (data) => {
    if (!data.name && !data.phoneNumber) return;
    const { information } = this.state;
    this.setState({
      "information": information.concat(Object.assign({}, data, { id: this.index++ }))
    })
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      'information': information.map(v => {
        if (v.id === id) return Object.assign({}, { id: id }, data);
        return v;
      })
    })
  }

  handleChange = ({ target }) => {
    this.setState({
      keyword: target.value
    })
  }

  render() {
    const { information } = this.state;
    return (
      <div className="App">
        <PhoneForm onCreate={this.handleCreate} />
        <input
          value={this.state.keyword}
          onChange={this.handleChange}
          placeholder="검색하세요"
        />
        <br />
        <br />
        <PhoneList
          info={information.filter(v => {
            return v.name.indexOf(this.state.keyword) > -1
          })}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
