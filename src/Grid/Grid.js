import React, { Component } from 'react';
import './Grid.css';
import '../App'


//creo el estado original
class Grid extends Component {
 constructor(props){
      super(props);
      this.state={lightOn:true } //la luz encendida por default es true
  } 

  //Modifico el estado
   toggleLight=()=>{
    let cellStatus=this.state.lightOn; 
    console.log(cellStatus);  //para ver el satatus true or false

    
    this.setState((state,props)=>
        this.props.id<=2?
        ({lightOn:!(this).state.lightOn}):
        ({lightOn:this.state.lightOn})
        ) //aqui cambio el estado de la luz (el toggle),si esta encendida se apaga y viceverza 

    console.log(cellStatus); //solo para ver
    let stringId = this.props.id
    let cellId= parseFloat(stringId); //convierto el id de la posicion en entero para moverme hacia las otras posiciones
    
    //adjacent lights
    let currentCell= stringId;
    let leftCell=(cellId-1).toString();
    let rightCell=(cellId+1).toString();
    let topCell=(cellId-5).toString();
    let bottomCell=(cellId+5).toString();
  
    
    switch (true){
        case (cellId<=4):
       
            console.log(`light ${currentCell} changed state`);
            console.log(`light ${leftCell} changed state`);
            console.log(`light ${rightCell} changed state`);
            console.log(`light ${topCell} changed state`);
            console.log(`light ${bottomCell} changed state`);
        break;
        case  (cellId>=7 && cellId<=9):
            console.log(`light ${currentCell} changed state`);
            console.log(`light ${leftCell} changed state`);
            console.log(`light ${rightCell} changed state`);
            console.log(`light ${topCell} changed state`);
            console.log(`light ${bottomCell} changed state`);
        break;
        case  (cellId>=12 && cellId<=14):
            console.log(`light ${currentCell} changed state`);
            console.log(`light ${leftCell} changed state`);
            console.log(`light ${rightCell} changed state`);
            console.log(`light ${topCell} changed state`);
            console.log(`light ${bottomCell} changed state`);
        break;
        case  (cellId>=17 && cellId<=19):
            console.log(`light ${currentCell} changed state`);
            console.log(`light ${leftCell} changed state`);
            console.log(`light ${rightCell} changed state`);
            console.log(`light ${topCell} changed state`);
            console.log(`light ${bottomCell} changed state`);
        break;
        case  (cellId>=22 && cellId<=25):
            console.log(`light ${currentCell} changed state`);
            console.log(`light ${leftCell} changed state`);
            console.log(`light ${rightCell} changed state`);
            console.log(`light ${topCell} changed state`);
            console.log(`light ${bottomCell} changed state`);
        break;
        case (cellId===6 || cellId===11 || cellId===16 || cellId===21):
            console.log(`light ${currentCell} changed state`);   
            console.log(`light ${rightCell} changed state`);
            console.log(`light ${topCell} changed state`);
            console.log(`light ${bottomCell} changed state`);

        break;
        default:
            console.log(`light ${currentCell} changed state`);   
            console.log(`light ${leftCell} changed state`);
            console.log(`light ${topCell} changed state`);
            console.log(`light ${bottomCell} changed state`);

        break;
    }
}

  

    render() {
        
        return(
            
        <div >
            
            <button className={this.state.lightOn 
            ? "on" 
            : "off"}
            
    //cuando ocurre el metodo onClick se llama a la funcion que hace toggle
            onClick={this.toggleLight} >{this.props.id}
            
                
            </button>    
                
       </div>
       
       
        );
       
    }

}
export default Grid;