import React, { Component } from 'react';
import './App.css';
import PhoneForm from './components/PhoneForm'
import PhoneList from './components/PhoneList'

class App extends Component {

  state = {
    information: []
  }

  index = 0;

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      "information": information.filter(v => v.id !== id)
    });
  }

  handleCreate = (data) => {
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


  render() {
    const { information } = this.state;
    return (
      <div className="App">
        <PhoneForm onCreate={this.handleCreate} />
        <PhoneList
          info={information}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
