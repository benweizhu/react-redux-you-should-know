import React from 'react';
import ReactDOM from 'react-dom';

class ReactComponent extends React.Component {
  render() {
    return <div>{`I am React.Component ${new Date().toLocaleString()}`}</div>;
  }
}

const FunctionalComponent = (props) => (<div>{`I am Functional ${new Date().toLocaleString()}`}</div>);

class ReactPureComponent extends React.PureComponent {
  render() {
    return <div>{`I am React.PureComponent ${new Date().toLocaleString()}`}</div>;
  }
}

class ParentComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      message: ''
    }
  }

  handleMessageChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.message} onChange={this.handleMessageChange} />
        <ReactComponent />
        <FunctionalComponent />
        <ReactPureComponent />
      </div>
    );
  }
}

ReactDOM.render(<ParentComponent />, document.getElementById('app'));
