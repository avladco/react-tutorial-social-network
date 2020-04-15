## Create a Class Component
When creating a React component, the component's name must start with an upper case letter.

The component has to include the `extends React.Component` statement, this statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.

The component also requires a `render()` method, this method returns HTML.

Example:
```flow js
class Gop extends React.Component {
  render() {
    return <h2> Hi gopnik {this.props.name} </h2>;
  }
}
```
Now your React application has a component called Gop, which returns a `<h2>` element.

To use this component in your application, use similar syntax as normal HTML: `<Gop name="Iohanis" />`

---

### React lifecycle methods
https://programmingwithmosh.com/javascript/react-lifecycle-methods/

- React component lifecycle has three categories – Mounting, Updating and Unmounting.
- The `render()` is the most used lifecycle method.
  - It is a pure function.
  - You cannot set state in render()
- The `componentDidMount()` happens as soon as your component is mounted.
  - You can set state here but with caution.
- The `componentDidUpdate()` happens as soon as the updating happens.
  - You can set state here but with caution.
- The `componentWillUnmount()` happens just before the component unmounts and is destroyed.
  - This is a good place to cleanup all the data.
  - You cannot set state here.
- The `shouldComponentUpdate()` can be used rarely.
  - It can be called if you need to tell React not to re-render for a certain state or prop change.
  - This needs to be used with caution only for certain performance optimizations.
- The two new lifecycle methods are `getDerivedStateFromProps()` and `getSnapshotBeforeUpdate()`.
  - They need to be used only occasionally.
  - Not many examples are out there for these two methods and they are still being discussed and will have more references in the future.
---
- render(){}
- componentDidMount(){}
- componentDidUpdate(){}
- componentWillUnmount(){}
- shouldComponentUpdate(){}
- static getDerivedStateFromProps(){}
- getSnapshotBeforeUpdate(){}
