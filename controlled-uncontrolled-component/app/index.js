import React from 'react';
import ReactDOM from 'react-dom';

class ControlledNameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.input.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={(input) => this.input = input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class ParentComponent extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ControlledNameForm />
        <NameForm />
      </div>
    );
  }
}

ReactDOM.render(<ParentComponent />, document.getElementById('app'));
