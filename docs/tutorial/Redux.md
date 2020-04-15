# Redux
getState() / subscribe(observer) / dispatch(action)
`npm install redux --save`
`import {combineReducers, createStore} from "redux";`

- `combineReducers()` Creaza un obiect de `reducer`-i care ulterior sunt uniti intr-un store.
Fiecare `reducer` trebuie sa aiba `state`, si metode care vor schimba `state`-ul.
- `createStore()` creaza un `store` din `reducer`-i.
```js
let reducers = combineReducers({
profilePage: profileReducer,		
dialogsPage: dialogsReducer
});
let store = createStore(reducers);	//- 
```

## dispatch(action) Action Creator
`dispatch()` = o Metoda din interiorul la `store`. 
El raspunde de orice `schimbare/actiune` in `state`.
- Fiecare actiune are o denumire. Ea se scrie sub forma de *action* `type`, ex: `dispatch({type:'ADD-POST'});`
- Pe langa `type:` in `dispatch()` putem adauga alte *actions* cu elemente din exteriorul functiei.(gen props), ex:
`dispatch({type:'UPDATE-POST', newText: text});`
```js
let addPost = (text) => { dispatch({type:'UPDATE-POST-TEXT', newText: text}); };

dispatch(action) {
	if (action.type === 'UPDATE-POST-TEXT') {
            ...state, newPostText: action.newText;	    
        }
    }	
//<button onClick={ addPost("my new text") }> Add Post </button>
```

## React-Redux connect()
`install react-redux --save`
`import {Provider} from "react-redux";` global **Context**
`import {connect} from "react-redux";`
  - `conect` transmite `props` la Componenta Container.
  - Functia `connect()()` conecteaza React cu Redux store. 
  - Prima functie() transmite `store` Data ca `props`. Are 2 parametri: mapStateToProps, mapDispatchToProps. 
  - mapStateToProps / mapDispatchToProps sunt obiecte - `({..})`.
  - A 2-a functie()() contine Presentaton *Component* la care se vor aplica `props`
  - `conect`-ul singur ia datele din store: `state` / `dispatch`.
  
 Exemplu:
```js
 let mapStateToProps = (state) => {              //State data
    return {
        a: state.page1,               
        b: state.page2
    }
 };

 let mapDispatchToProps = (dispatch) => {         //Dispatch func
    return {
        c: () => {                  
        dispatch(sendMessage());    
        },
        d: (body) => {
        dispatch(textUpdate(body));  
        }            
    }
 };

 const ContainerComponent = connect(mapStateToProps, mapDispatchToProps)(PresComponent);
// Rezultat: `<PresComponent a=".." b=".." c=".." d=".." />`
 ```
 
 ## Context <Provider>
`npm install react-redux –save`
`import {Provider} from "react-redux";`

 **Context** – Creaza un spatiu global in care se pastreaza atributele functiei (ex:state), 
 pentru a nu trimite `props` prin toate componentele (prin tree). 
 *Componenta Container* poate lua datele direct din `Context Provider`.
 Context.Consumer trebuie sa fie neaparat in interiorul la Context.Provider (Child).
 ```js
<Provider store={store}>
 	connect(mstp, mdtp)(MyContainer);
</Provider>
 ```
`connect` primeste datele direct de la <Provider>, care este componenta parentala.
 
## dispatch Thunk Creator
`npm install redux-thunk`
`import { createStore, applyMiddleware } from 'redux';`
`import thunkMiddleware from "redux-thunk";`
```js
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
```
- Dispatch a fn that contains dispatch actions(obj)
```js
export const getUserProfile = (props) => (dispatch) => {       // Dispatch Thunk creator
    usersAPI.getProfile(props).then(response => {              // API request
        dispatch(setUser(response.data));                      // Dispatch action creator
    });
};

export const thunk = (props) => {      
    return (dispatch) => {
        dispatch(setProgress(true, props));
    };
};
```

## compose()()
`import {compose} from "redux";`
- Functia compose determina un sir de functii de tip HOC, (primul parametru)
- si Componenta finala JSX la care se vor aplica. (al 2-lea parametru).
 ```js
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(MyComponent)
```