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
      <p>{props.osat[0].nimi}</p>
      
      
    </div>
  )
}

const Yhteensa = (props) => {

  return (
    <div>
      <p>{props.osat[0].nimi}</p>
      
      
    </div>
  )
}

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osat = [
    {
      nimi: 'Reactin perusteet',
      tehtavia: 10
    },
    {
      nimi: 'Tiedonvälitys propseilla',
      tehtavia: 7
    },
    {
      nimi: 'Komponenttien tila',
      tehtavia: 14
    }
  ]

  return (
    <div>
      <Otsikko otsikko={kurssi} />
      <Sisalto osat={osat} />
      <Yhteensa summa={osat} />
    </div>
  )
}
//
ReactDOM.render(
  <App />,
  document.getElementById('root')
)