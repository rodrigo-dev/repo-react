import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class FirstComponente extends Component{
    render(){
        return (
            <div>Chega</div>
        )
    }
}
class FirstComponente1 extends Component{
    render(){
        return (
            <div>Logo</div>
        )
    }
}
class FirstComponente2 extends Component{
    render(){
        return (
            <div>Dia 03</div>
        )
    }
}

ReactDOM.render(<FirstComponente/>,
    document.getElementById('app')
);
ReactDOM.render(<FirstComponente1/>,
    document.getElementById('ap')
);
ReactDOM.render(<FirstComponente2/>,
    document.getElementById('p')
);