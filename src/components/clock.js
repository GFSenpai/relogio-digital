import Reactm, { Component } from "react"
import '../styles/clock.css'

class Clock extends Component{

    constructor(props){

        super(props)

        /* Capturamos a hora atual */
        this.state = {
            time: new Date().toLocaleTimeString()
        }

    }

    /* Aterar o estado da hora para uma nova hora*/
    updateClock(){
        this.setState({
            time: new Date().toLocaleTimeString() 
        })
    }

    /* A cada 1 segundo é chamda a funçao updateClock */
    componentDidMount(){
        this.intervalID = setInterval(()=>
            this.updateClock(),
            1000
        )
    }
    
    /* Limpar o setInteval chamdo de intervalID para otimizar a memoria */
    componentWillUnmount(){
        clearInterval(this.intervalID)
    }

    render(){
        return(
            <div className="Time">
                <p> { this.state.time } </p>
            </div>
        )
    }
}

export default Clock 