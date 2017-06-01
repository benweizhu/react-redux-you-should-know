import React from 'react';
import ReactDOM from 'react-dom';
import Perf from 'react-addons-perf'

class NoKeysComponent extends React.PureComponent {
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

class HasKeysComponent extends React.PureComponent {
  render() {
    return <div>
      {
        this.props.items.map((item) => (
          <li key={item}>{item}</li>
        ))
      }
    </div>;
  }
}

class ParentComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items: ['JavaScript', 'Java', 'C++', 'Spark', 'Python', 'Ruby', 'Scala'],
      newItem: ''
    }
  }

  handleAdd = (e) => {
    if (e.keyCode === 13) {
      var newItems = this.state.items.slice()
      newItems.unshift(this.state.newItem);
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
        <br/>
        <HasKeysComponent items={this.state.items} />
      </div>
    );
  }
}

window.Perf = Perf
ReactDOM.render(<ParentComponent />, document.getElementById('app'));
