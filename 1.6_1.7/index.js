import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        
        hyva: 0,
        neutraali: 0,
        huono: 0,
        kaikki: [0,0,0],
        summa: 0,
        saldo: 0
      }
    }
  
    klikHyva = () => {
      this.setState({
        hyva: this.state.hyva + 1,
        kaikki: this.state.kaikki[0] +1,
        summa: this.state.summa +1,
        saldo: this.state.saldo +1
      })
    }
  
    klikNeutraali = () => {
      this.setState({
        neutraali: this.state.neutraali + 1,
        kaikki: this.state.kaikki[1] +1,
        summa: this.state.summa +1,
        saldo: this.state.saldo +0
      })
    }

    klikHuono = () => {
        this.setState({
          huono: this.state.huono + 1,
          kaikki: this.state.kaikki[2] +1,
          summa: this.state.summa +1,
          saldo: this.state.saldo -1
        })
      }

  
    render() {
      
      return (
          
        <div>
            <h1> anna palautetta </h1>
          <div>
            
            <button onClick={this.klikHyva}>hyva</button>
            <button onClick={this.klikNeutraali}>neutraali</button>
            <button onClick={this.klikHuono}>huono</button>

            <h1> statistiikka </h1>

            <div> hyvä {this.state.hyva} </div>
            <div> neutraali {this.state.neutraali} </div>
            <div> huono {this.state.huono} </div>

            
            <div> keskiarvo {this.state.saldo/this.state.summa || 0}</div>
            <div> positiivisia {this.state.hyva/this.state.summa *100|| 0 *100} %</div>
            
                
            

            
          </div>
        </div>
      )
    }
    //Ao. aaltosulku on Appin vika laini
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )

