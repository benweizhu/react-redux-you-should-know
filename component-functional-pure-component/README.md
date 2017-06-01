Extending from React.PureComponent or from React.Component with a custom shouldComponentUpdate method have performance implications. Using stateless functional components is an "architectural" choice and doesn't have any performance benefits out of the box.

In the exmaple, React.Component(no customize for shouldComponentUpdate) and Functional Component will always call render();

React.PureComponent will do a shallowCompare.

shallowCompare performs a shallow equality check on the current props and nextProps objects as well as the current state and nextState objects.
It does this by iterating on the keys of the objects being compared and returning true when the values of a key in each object are not strictly equal.
