import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {

  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

 const App = () => {
  const nimi = "John"
  const ika = 10
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="John" age={26 + 10}/>
      <Hello name={nimi} age={ika} />
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