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
      <Sisalto first={osat[0].nimi} first2={osat[0].tehtavia} />
      <Sisalto second={osat[1].nimi} second2={osat[1].tehtavia} />
      <Sisalto third={osat[2].nimi} third2={osat[2].tehtavia} />
      <Yhteensa summa={osat[0].tehtavia + osat[1].tehtavia + osat[2].tehtavia} />
    </div>
  )
}
//
ReactDOM.render(
  <App />,
  document.getElementById('root')
)