## NavLink
`npm install react-router-dom --save`
- Pachetul care lucreaza cu elemente Ajax
- Componenta `<Route />` lucreaza cu adresa URL.
  - Atunci cand URL coincide cu artibutul `path= / exact path=`,
    Routul afiseaza componenta de la `render=`. Cum URL se schimba,
    Routul distruge componenta afisata. 
- Componenta `<Route />` functioneaza doar in `<BrowserRouter />`.
  - Atributul `component=` cere doar denumirea componentei
  - dar `render={()=>{}}` cere componenta in format `JSX </>`, prin care pot fi transmise si `(props)` 
  - Putem da denumire unei componente pentru a o scrie la Route `component=`.	
    `let SomeComponent = () => <FunctiaComponenta />`
- `<NavLink to="">` seteaza URL-ul paginii (`https://page`).
  - `<NavLink />` este de fapt `<a>` cu parametrul `preventDefault`.
  - `<NavLink />` cheama un element jsx fara a restarta toata pagina (*ajax*), 
                  spre deosebire de `<a href>` care restarteaza toata pagina.
	
Exemplu:
```flow js
import {BrowserRouter, Route} from "react-router-dom";

	<BrowserRouter>				
		<Route path="/testPage" component={ FunctiaComponenta } />				              
		<Route path="/testPage" render={ () => <FunctiaComponenta /> }>
	</BrowserRouter> 
```
```
import {NavLink} from "react-router-dom";
	
	<NavLink to="/test1"> Link </NavLink>
	<NavLink .. activeClassName={cs.activ}>	</NavLink>
                    
              //Parametrul activeClassName functioneaza cand linkul este activ.
	      //css: a.activ {color:blue;}	
```