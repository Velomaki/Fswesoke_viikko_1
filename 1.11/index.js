import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        
        hyva: 0,
        neutraali: 0,
        huono: 0,
        kaikki: ['hyvä ', 'neutraali ', 'huono ', 'summa ', 'saldo ', 'keskiarvo ', 
        'positiivisia '],
        summa: 0,
        saldo: 0,
        keskiarvo: 0,
        positiivisia: 0
        //ka:ta ja positiivisia-kohtaa ei näemmä tarvitakaan
      }
    }

    
  
    klikHyva = () => {
      this.setState({
        hyva: this.state.hyva + 1,
        summa: this.state.summa +1,
        saldo: this.state.saldo +1,
        keskiarvo: this.state.saldo/this.state.summa || 0,
        positiivisia: this.state.hyva/this.state.summa *100 || 0 *100
      })
    }
  
    klikNeutraali = () => {
      this.setState({
        neutraali: this.state.neutraali + 1,
        summa: this.state.summa +1,
        saldo: this.state.saldo +0,
        keskiarvo: this.state.saldo/this.state.summa || 0,
        positiivisia: this.state.hyva/this.state.summa *100 || 0 *100
      })
    }

    klikHuono = () => {
        this.setState({
          huono: this.state.huono + 1,
          summa: this.state.summa +1,
          saldo: this.state.saldo -1,
          keskiarvo: this.state.saldo/this.state.summa || 0,
          positiivisia: this.state.hyva/this.state.summa *100 || 0 *100
        })
      }

  
    render() {
      
      if(this.state.hyva + this.state.neutraali + this.state.huono > 0){
      return (
          
        <div>
            <h1> Anna palautetta! </h1>
          <div>
            
            <Button klikinlaatu={this.klikHyva} napinlaatu='hyva'/>
            <Button klikinlaatu={this.klikNeutraali} napinlaatu='neutraali'/>
            <Button klikinlaatu={this.klikHuono} napinlaatu='huono'/>
            
            <h1> Statistiikka </h1>

            
            <Statistics nimi1={this.state.kaikki[0]} statsi1={this.state.hyva}
                        nimi2={this.state.kaikki[1]} statsi2={this.state.neutraali}
                        nimi3={this.state.kaikki[2]} statsi3={this.state.huono}
                        nimi4={this.state.kaikki[5]} statsi4={this.state.saldo/this.state.summa || 0}
                        nimi5={this.state.kaikki[6]} statsi5={this.state.hyva/this.state.summa *100 || 0 *100}

            />

            

            
          </div>
        </div>
      )
    }else{
      return(
        <div>
            <h1> Anna palautetta! </h1>
          <div>
            
            <Button klikinlaatu={this.klikHyva} napinlaatu='hyva'/>
            <Button klikinlaatu={this.klikNeutraali} napinlaatu='neutraali'/>
            <Button klikinlaatu={this.klikHuono} napinlaatu='huono'/>
            
            <div> </div>
            <div> ei yhtään palautetta annettu </div>
            
          </div>
        </div>
      )
    }

    }
    //Ao. aaltosulku on Appin vika laini
  }
  const Button = (props) => {

    return (
      <button onClick={props.klikinlaatu}>{props.napinlaatu}</button>
    )

  }

  const Statistics  = (props) => {
    
    return (
      
        <table>
          <tbody>
          <Statistic nimi={props.nimi1} statsi={props.statsi1} />
          <Statistic nimi={props.nimi2} statsi={props.statsi2} />
          <Statistic nimi={props.nimi3} statsi={props.statsi3} />
          <Statistic nimi={props.nimi4} statsi={props.statsi4} />
          <Statistic nimi={props.nimi5} statsi={props.statsi5} />
          </tbody>
        </table>

      
      
    )
  

  }

  const Statistic = (props) => {
    if(props.nimi === "positiivisia "){
      return (
        <tr>
          <td>{props.nimi}</td><td>{props.statsi}%</td>
        </tr>
  
      )
    }else{
    return (
      <tr>
        <td>{props.nimi}</td><td>{props.statsi}</td>
      </tr>

    )
  }


  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )

