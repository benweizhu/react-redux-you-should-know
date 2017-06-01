import React from 'react';
import ReactDOM from 'react-dom';

class ReactComponent extends React.Component {
  render() {
    return <div>{`I am React.Component ${new Date().toLocaleString()}`}</div>;
  }
}

const FunctionalComponent = (props) => (<div>{`I am Functional ${new Date().toLocaleString()}`}</div>);

class CustomizedReactComponent extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.message !== nextProps.message) {
      return true;
    }
    return false;
  }

  render() {
    return <div>{`I am customized React.Component ${this.props.message} ${new Date().toLocaleString()}`}</div>;
  }
}

class ReactPureComponent extends React.PureComponent {
  render() {
    return <div>{`I am React.PureComponent ${new Date().toLocaleString()}`}</div>;
  }
}

class ParentComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      message: 'default message'
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
        <CustomizedReactComponent message="never change message"/>
        <CustomizedReactComponent message={this.state.message}/>
        <ReactPureComponent />
      </div>
    );
  }
}

ReactDOM.render(<ParentComponent />, document.getElementById('app'));
