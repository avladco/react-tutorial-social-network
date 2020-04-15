## React-Redux

`install react-redux --save`

`import {Provider} from "react-redux";` global **Context**

`import {connect} from "react-redux";`

- Functia `connect()()` conecteaza React cu Redux store. 
  - Prima functie() transmite store Data ca `props` 
  - A 2-a functie()() contine Presentaton Component la care se vor aplica `props`
  - `conect`-ul singur ia datele din store: state, dispatch..
  
 Exemplu:
```jsx
 let stateProps = (state) => {              //State data
    return {
        a: state.page1,               
        b: state.page2
    }
 };

 let dispathProps = (dispatch) => {         //Dispatch func
    return {
        c: () => {                  
        dispatch(sendMessage());    
        },
        d: (body) => {
        dispatch(textUpdate(body));  
        }            
    }
 };

 const ContainerComponent = connect(stateProps, dispathProps)(PresComponent);
 ```
 Rezultat: `<PresComponent a=".." b=".." c=".." d=".." />`
 
