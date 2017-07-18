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

class ListOfWordsJustDoShallowCompare extends React.PureComponent {
  render() {
    return <div>{`I am not going to change " ${this.props.words.join(',')}" because fo ShallowCompare`}</div>;
  }
}

class WordAdderJustDoShallowCompare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['marklar']
    };
  }

  handleClick = () => {
    // This section is bad style and causes a bug
    const words = this.state.words;
    words.push(this.props.newWord);
    this.setState({ words: words });
  }

  handleAssignClick = () => {
    this.setState((prevState,props) => ({
      words: [...prevState.words, props.newWord],
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>I will not add to text</button>
        <button onClick={this.handleAssignClick}>I will add to text</button>
        <ListOfWordsJustDoShallowCompare words={this.state.words} />
      </div>
    );
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
        <CustomizedReactComponent message="never change message" />
        <CustomizedReactComponent message={this.state.message} />
        <ReactPureComponent />
        <br/><br/><br/><br/>
        <WordAdderJustDoShallowCompare newWord={this.state.message} />
      </div>
    );
  }
}

ReactDOM.render(<ParentComponent />, document.getElementById('app'));
