import React from 'react';
import ReactDOM from 'react-dom';

class NoKeysComponent extends React.Component {
  render() {
    return <div>
      {
        this.props.items.map((item) => (
          <li>{item}</li>
        ))
      }
    </div>;
  }
}

class HasKeysComponent extends React.Component {
  render() {
    return <div>
      {
        this.props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))
      }
    </div>;
  }
}

class ParentComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items: ['JavaScript', 'Java', 'C++'],
      newItem: ''
    }
  }

  handleAdd = (e) => {
    if (e.keyCode === 13) {
      var newItems = this.state.items.slice()
      newItems.push(this.state.newItem);
      this.setState({
        items: newItems
      });
    }
  }

  handleNewItemChange = (e) => {
    this.setState({
      newItem: e.target.value
    });
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.newItem} onChange={this.handleNewItemChange} onKeyDown={this.handleAdd} />
        <NoKeysComponent items={this.state.items} />
        <HasKeysComponent items={this.state.items} />
      </div>
    );
  }
}

ReactDOM.render(<ParentComponent />, document.getElementById('app'));
