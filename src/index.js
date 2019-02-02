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
  const osa1 = {
    nimi: 'Reactin perusteet',
    tehtavia: 10
  }
  const osa2 = {
    nimi: 'Tiedonvälitys propseilla',
    tehtavia: 7
  }
  const osa3 = {
    nimi: 'Komponenttien tila',
    tehtavia: 14
  }

  return (
    <div>
      <Otsikko otsikko={kurssi} />
      <Sisalto first={osa1.nimi} first2={osa1.tehtavia} />
      <Sisalto second={osa2.nimi} second2={osa2.tehtavia} />
      <Sisalto third={osa3.nimi} third2={osa3.tehtavia} />
      <Yhteensa summa={osa1.tehtavia + osa2.tehtavia + osa3.tehtavia} />
    </div>
  )
}
//
ReactDOM.render(
  <App />,
  document.getElementById('root')
)