

import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {

  return (
    <div>
      <h1>{props.otsikko}</h1>
    </div>

  )
}

const Sisalto = (props) => {

  return (
    <div>
      <p>{props.first} {props.first2}</p>
      <p>{props.second} {props.second2}</p>
      <p>{props.third} {props.third2}</p>
    </div>
  )
}

const Yhteensa = (props) => {

  return (
    <div>
      <p>Yhteensä {props.summa}</p>
    </div>
  )
}

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  return (
    <div>
      <Otsikko otsikko={kurssi} />
      <Sisalto first={osa1} first2={tehtavia1} />
      <Sisalto second={osa2} second2={tehtavia2} />
      <Sisalto third={osa3} third2={tehtavia3} />
      <Yhteensa summa={tehtavia1 + tehtavia2 + tehtavia3} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)