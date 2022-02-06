// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'


  // 🐨 initialize the state to the value from localStorage
  // 💰 window.localStorage.getItem('name') ?? initialName

  function useSyncLocalStorage(key, defaultValue = ''){

    function getInitialValue(){
      return window.localStorage.getItem(key) || defaultValue;
    }
    const [state, setState] = React.useState(getInitialValue);
  
    React.useEffect(() => {
      window.localStorage.setItem(key, state);
    }, [key, state]);

    return [state, setState]

  }

  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `name` in localStorage.
  // 💰 window.localStorage.setItem('name', name)
  function Greeting({initialName = ''}) {
    const [name, setName] = useSyncLocalStorage('name', initialName);
  function handleChange(event) {
    setName(event.target.value)
  }
  
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}
  

function App() {
  return <Greeting initialName='Prasanthx'/>
}

export default App
