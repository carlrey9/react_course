# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Steps to create and run 
- Create the project:
In console write down the next commands 
    - ``` npm create vite@latest```
    - Put name project 
    - Chose ```React``` option
    - Chose ```Javascript + SWC``` option

- Go to the porject folder 
    - ```cd name_project```

- Install npm and run 
    - ```npm install```
    - ```npm run dev```
    After this our project will run adn we can see the url on the console to copy it and checkit on brwoser or other html viewer.

- Creation of card as component example and imoplement it on the main 
- Create file adding the components we want and add the parameters we would like to inject on this component.
    ```     
    const Card1 = ({ title, description }) => {
        return <section>
            <h2>{title}</h2>
            <p>{description}</p>
        </section>
    }
    export default Card1; 
    ```
- import the component and use it 
    ```
    import Card1 from '../components/card'

    <Card1 title="Card 1" description="Description" />
      
    ```

## useState hook
- A hook looks like a special functionality to implement in javascript project when we use react.
- useState is a hook which function is to give us the control to manage an state that can be any value, String, number, list, etc. We can read it, and update  it, places where we are using this state will update if we update it.

- we start importing the hook
    ```
    import { useState } from 'react';
    ```

- Then we create the component, create the state, read it and update it.
    ```
    const Counter = () => {
    const [count, setCount] = useState(0);
    return (

        <div>
            <p>El contador esta en: {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar </button>
            <button onClick={() => setCount(count - 1)}>Decrementar </button>
        </div>
        )
    }
    export default Counter; 
    ```

- Creating the state
    ```
        const [count, setCount] = useState(0);
    ```
    - Count: is the value which we will read
    - setCount: Is the methoid we will call and execute and there we will change the value.
---
### Creating a form 
- We will use an input and save it in the use state to show it later
- firts we create the component
```

import { useState } from "react";

const NameForm = () => {
    const [name, setNameForm] = useState("");

    return (
        <div>
            <input
                type="text"
                placeholder="Ingresa tu nombre"
                value={name}
                onChange={(event) => setNameForm(event.target.value)}
            />
            <p>
                Hola, {name || "visitante"}
            </p>


        </div>
    );
}

export default NameForm;    
```
- We import and use the new component
```
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import NameForm from '../components/NameForm'

function App() {
  return (
    <>
      <h1>Formulario de Nombre</h1>
      <NameForm />
    </>
  )
}

export default App

```

---
### Use Effect 
Is A hook which we can use to execute an additional action when a value change.

- We will use the same counter but modifying it a bit adding the new hook "useEffect" and execute "the counter has change to #" on the console.

```
import { useState, useEffect } from "react";

const CounterWithEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`El contador cambió a: ${count}`);
    }, [count]);

    return (

        <div>
            <p>El contador esta en: {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar </button>
        </div>
    )
}

export default CounterWithEffect;
```

- And let´s import and use the component in the app.jsx
```
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import CounterWithEffect from '../components/CounterWithEffect'

function App() {
  return (
    <>
      <CounterWithEffect />
    </>
  )
}

export default App

```

