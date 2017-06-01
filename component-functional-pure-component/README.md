https://stackoverflow.com/questions/40703675/react-functional-stateless-component-purecomponent-component-what-are-the-dif

Extending from React.PureComponent or from React.Component with a custom shouldComponentUpdate method have performance implications. Using stateless functional components is an "architectural" choice and doesn't have any performance benefits out of the box.

**code**
In the exmaple, React.Component(no customize for shouldComponentUpdate) and Functional Component will always call render();

React.PureComponent will do a shallowCompare.

https://facebook.github.io/react/docs/shallow-compare.html

shallowCompare performs a shallow equality check on the current props and nextProps objects as well as the current state and nextState objects.
It does this by iterating on the keys of the objects being compared and returning true when the values of a key in each object are not strictly equal.

https://facebook.github.io/react/docs/optimizing-performance.html
