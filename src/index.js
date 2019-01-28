import React from 'react'
import ReactDOM from 'react-dom'

const Hello = () => {

  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}

 const App = () => {

  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
      <Hello />
      <Hello />
    </div>
  )

 }




const Test1 = () => {
  const now = new Date()
  const a = 10
  const b = 20
  return (
    <div> 
      <p>Hello world, it is {now.toString()}</p>
      <p>{a} plus {b} is {a + b}</p>
    </div>
  )
}
  

ReactDOM.render(<App />, document.getElementById('root'))