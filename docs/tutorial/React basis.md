## React layers
1. UI - User interface
2. BLL - Business logic layer (redux)
3. DAL - Data acces layer   (ajax request to server API) (axios)

Presentation Component(UI) <-> Container Component(UI props) <-> Reducer(BLL) <-> Server API(DAL) 

FLUX: UI -> dispatch -> BLL -> state -> UI (rerender) 

## Pure function / Single responsibility
O functie trebuie sa fie curata. Trebuie sa aiba un singur scop, o singura responsabitlitate.

- Functia JSX: 
  - 1. immutability - fn nu are dreptul sa modifice nimic din exterior, din contextul global.
        De aceea cand folosim datele din state, facem o copie `...state`.
        Ex: `slice()` - creaza un obiect nou (immutabil). `splice()`,`reverse()` - schimba obiectul global (sunt mutabile).
  - 2. return - Ca sa fie utila, fn trebuie sa faca `return`, iar cu rezultatul fn putem lucra mai departe.
  - 3. no side effects - nu schimba nimic in exterior, pentru a schimba ceva se foloseste `hook` sau `class`.
  - 4. idempotence - fn returneaza mereu acelasi rezultat. Este predictibila.
  
**props** --in--> **Functional Component** --out--> **JSX**

**state,action** --in--> **Reducer** --out--> **state**

**Component** --in--> **HOC** --out--> **WrapperComponent**

### Types of components
JSX Component
Container Component

HOC - High order component.
- O functie care primeste o Componenta si returneaza alta Componenta (modificata).
```js
let HOC = (Component) => {
    let WrapperContainer = (props) => {
        return <Component atr="blabla" />
    }
}
```

### Local State
`Class` Components have local `state`.
Class `state` is using with `this`. 
We can change `state` with `setState()` method. 
`setState` will do `rerender` of Component.
```js
class MyComponent extends React.Component {
    state = {
      something: true
    };

    changeState () {
    this.state.something = false; // Will change state without rerender.
    this.forceUpdate();           // Will rerender the Component - not recomanded
    this.setState({something: false}); // Will change state and rerender - recomanded
    }

    render(){
        console.log( this.state.something )
    }
}
```

## React.lazy / <React.Suspense>
- `React.lazy` will import/render a Component only if it will be used.
- This will make App render faster.
- `Lazied` Components must be inside `<React.Suspense>`
Ex:
```js
const UsersContainer = React.lazy(() => import ("./components/Users/UsersContainer"));
const Login = React.lazy(() => import ("./components/Login/Login"));
```
```jsx
<React.Suspense fallback={<div> loading.. </div>}>      // fallback = waiting preloader
    <Route path="/users" render={() => <UsersContainer/>}/> // will import/render on acces it
    <Route path="/login" render={() => <Login/>}/>
</React.Suspense>
```
