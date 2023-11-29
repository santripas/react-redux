import React from 'react';
import {connect} from 'react-redux';
import './App.css';


class Counter extends React.Component{

  increment = ()=> {
    //TODO: Chamar função para incrementar no próprio redux. 
  }
  
  alterarTitulo = ()=> {
    // TODO: Chamar função para alterar título no próprio redux.
  }
  

  render(){
    return(
      <div>
        <button onClick={this.alterarTitulo}>Alterar titulo</button>
        <button onClick={this.increment}>Mais!</button>
      <h2>{this.props.count}</h2>
      <h3>{this.props.title}</h3>
      </div>
    )
  }
}

const mapStateToProps = state => ({count:state.count, title:state.title});
export default connect(mapStateToProps)(Counter);