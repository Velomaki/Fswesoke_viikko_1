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
      <Otsikko  name={kurssi} />
      <Sisalto part1={osa1.nimi} exercises1={osa1.tehtavia}
            part2={osa2.nimi} exercises2={osa2.tehtavia}
            part3={osa3.nimi} exercises3={osa3.tehtavia}/>
      <Yhteensa yht1={osa1.tehtavia} yht2={osa2.tehtavia} yht3={osa3.tehtavia} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)