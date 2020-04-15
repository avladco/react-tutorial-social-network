
## useState() 
```js
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
- const `count` is just a number (variable)
- `count` value is result (value) from `useState()`
- On `setCount()` fn, React will change `useState()` value and rerender the Component.
- React saves values of `useState()` inside him. (vnutri sebia) 


## useEffect()
```js
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
> ! ! ! 
  `useEffect()` is a fn that executes **after** Component rendering.
- It take the `count` value from *this* render.
- Each render has own values.

- если нужно избежать ненужных перезапусков эффектов, эффекту можно передать массив **зависимостей** 
    (такие массивы ещё называют deps), выглядящий как аргумент useEffect:
```js
useEffect(() => {
    document.title = 'Hello, ' + name;
  }, [name]); // Наши зависимости
    // useEffect will run only if [deps] will be changed.
```   
- Array of deps. (depinde de zavisit)
- Deps`[]` is the 2nd parameter of `useEffect()`, and must contain values from inside *this* Component render.
- If [name] value is not changed, the `useEffect()`fn will be canceled. 

#### How to do componentDidMount with React Hooks?
```js
  useEffect(() => {
    // code to run on component mount
  }, []);   // empty array
```

#### How to do componentDidUnmount with React Hooks?
```js
useEffect(() => {
    window.addEventListener('mousemove', () => {});
    
return () => {
    // returned function will be called on component unmount 
    window.removeEventListener('mousemove', () => {})
  }
}, []);
```

#### shouldComponentUpdate, PureComponent, memo
`React.memo()` is a great tool to memoize functional components. When applied correctly,
 it prevents component useless rendering when the next props equal to previous.

When a component is wrapped in `React.memo()`, React renders the component and memoizes the result.
 Before the next render, if the new props are the same, 
 React reuses the memoized result skipping the next rendering.
```js
const ToTheMoonComponent = React.memo(function MyComponent(props) {
 // повторно отображается только если изменилось свойство
});
 // может также быть функция стрелок es6
const OtherScotchy = React.memo(props => {
  return <div>my memoized component</div>;
});
```
or
```js
const RocketComponent = props => <div>my rocket component. {props.fuel}!</div>;
 // создаем версию, которая отображается, если изменилось свойство
const MemoizedRocketComponent = React.memo(RocketComponent);
```
