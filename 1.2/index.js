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
      <Sisalto part1={osa1} exercises1={tehtavia1}
      part2={osa2} exercises2={tehtavia2}
       part3={osa3} exercises3={tehtavia3}/>
      <Yhteensa part1={tehtavia1} part2={tehtavia2} part3={tehtavia3} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)