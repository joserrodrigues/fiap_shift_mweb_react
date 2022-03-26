import React from 'react'
import HomeView from './HomeView'

class HomeController extends React.Component {

    constructor(props) {
        super(props);

        //gerando logs da props
        console.log(" Chamando constructor() ");
        console.log(props);

        this.state = {
            count: 0,
        }; //inicializando o state

        //Inicializando o timeout
        this.interval = setInterval(() => {
            //atualizando o contador
            console.log(" Atualizando a classe ");
            this.setState({
                count: this.state.count + 1
            })
        }, 3000);
    }

    componentDidMount() {
        console.log(" Chamando componentDidMount ");
    }

    shouldComponentUpdate(nextProps, nextState) {
        //Só irá atualizar quando o count for diferente de 1
        if (this.state.count === 1) {
            console.log(" Chamando shouldComponentUpdate = false ");
            return false;
        } else {
            console.log(" Chamando shouldComponentUpdate = true ");
            return true;
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(" Chamando componentDidUpdate ");
    }

    componentWillUnmount() {
        clearInterval(this.interval)
        console.log(" Chamando componentWillUnmount ");
    }

    render() {
        console.log(" Chamando Render " + this.state.count);
        return (
            //Chamando o View e passando o props count_info
            <HomeView
                count={this.state.count}
            />
        )
    }


}
export default HomeController;