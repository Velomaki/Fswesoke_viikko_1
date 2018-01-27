import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
        <div>
            <h1> {props.name} </h1>
        </div>
    )
}

const Sisalto = (props) => {
    return (
        <div>
            <Osa osio={props.part1} exs={props.exercises1} />
            <Osa osio={props.part2} exs={props.exercises2} />
            <Osa osio={props.part3} exs={props.exercises3} />
            
        </div>
    )
}

const Osa = (props) => {
    return (
    <div>
        <p> {props.osio} {props.exs} </p>
    </div>
    )
}

const Yhteensa = (props) => {
    return (
        <div>
        <p> yhteensä {props.yht1+props.yht2+props.yht3} tehtävää </p>
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
      <Otsikko  name={kurssi} />
      <Sisalto part1={osat[0].nimi} exercises1={osat[0].tehtavia}
            part2={osat[1].nimi} exercises2={osat[1].tehtavia}
            part3={osat[2].nimi} exercises3={osat[2].tehtavia}/>
      <Yhteensa yht1={osat[0].tehtavia} yht2={osat[1].tehtavia} yht3={osat[2].tehtavia} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)