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
            <p> {props.part1} {props.exercises1} </p>
            <p> {props.part2} {props.exercises2} </p>
            <p> {props.part3} {props.exercises3} </p>
        </div>
    )
}

const Yhteensa = (props) => {
    return (
        <div>
        <p> yhteensä {props.part1+props.part2+props.part3} tehtävää </p>
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
      <Otsikko  name={kurssi} />
      <Sisalto part1={osa1} exercises1={tehtavia1}/>
      <Sisalto part1={osa2} exercises1={tehtavia2}/>
      <Sisalto part1={osa3} exercises1={tehtavia3}/>
      <Yhteensa part1={tehtavia1} part2={tehtavia2} part3={tehtavia3} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)