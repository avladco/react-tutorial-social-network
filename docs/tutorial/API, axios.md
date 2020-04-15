## API Aplication Programm[-ing] Interface
#### Server API
1. URL:"https://social-network.samuraijs.com/api/1.0/users" 
[[ Pe un server pot fi mai multe *endpoint*-uri, adica mai multe adrese pentru diferite pagini: /users /profile /list... ]]
2. http-request type: **get / post**
3. request payload
4. response data
5. http codes: 404 not found, 5xx - server errors, 3xx - redirect, 2xx - OK

GET - POST
- "https://social-network.samuraijs.com/api/get" - get
- "https://social-network.samuraijs.com/api/create" - post
- "https://social-network.samuraijs.com/api/update" - post
- "https://social-network.samuraijs.com/api/delete" - post

#### Server REST API

GET - POST - PUT - DELETE - PATCH
(CRUD - create, read, update, delete)

- "https://social-network.samuraijs.com/api" - get/post/put/delete

- single endpoint.

`npm install axios --save`

axios.get() / axios.put() / ....

```flow js
import * as axios from "axios";

axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=1&count=5`)
            .then(response => {             // in response primim toate datele din URL / ex: response.data
                response.data.items...      // folosim datele unde avem nevoie
            });
```

### Query parameters
In API Documentation sunt scrisi parametrii care ii putem folosi.

Example:

> Query Parameters
- count: (integer - default: 10 - maximum: 100)
page size (how many items will be returned in response)

- page: (integer - default: 1)
number of portion of items

- term: (string)
user name string for searching

Parametrii ii scriem in `url` dupa `?` cu `&` intre ei.

"https://social-network.samuraijs.com/api/1.0/users?page=3&count=5"
