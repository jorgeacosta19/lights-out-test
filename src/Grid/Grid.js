import React, { Component } from 'react';
import './Grid.css';
import '../App'




class Grid extends Component {
 constructor(props){
      super(props);
      this.state={lightOn:Math.round(Math.random())} 
  
    } 
   toggleLight=()=>{
    (this.setState({lightOn:!this.state.lightOn}
        )
    )
    this.setState((state,props)=>
    {
    const currentCell=parseFloat(this.props.id);
    const leftCell=parseFloat(this.props.id-1);
    const rightCell=parseFloat(this.props.id)+1;
    const topCell=parseFloat(this.props.id)-5;
    const bottomCell=parseFloat(this.props.id)+5;

        switch (true){
            case (currentCell<=4):
                
                console.log(`light ${currentCell} changed state`);
                console.log(`light ${leftCell} changed state`);
                console.log(`light ${rightCell} changed state`);
                console.log(`light ${topCell} changed state`);
                console.log(`light ${bottomCell} changed state`);
                
            break;
        
            case  (currentCell>=7 && currentCell<=9):
                        console.log(`light ${currentCell} changed state`);
                        console.log(`light ${leftCell} changed state`);
                        console.log(`light ${rightCell} changed state`);
                        console.log(`light ${topCell} changed state`);
                        console.log(`light ${bottomCell} changed state`);
                    break;
                    case  (currentCell>=12 && currentCell<=14):
                        console.log(`light ${currentCell} changed state`);
                        console.log(`light ${leftCell} changed state`);
                        console.log(`light ${rightCell} changed state`);
                        console.log(`light ${topCell} changed state`);
                        console.log(`light ${bottomCell} changed state`);
                    break;
                    case  (currentCell>=17 && currentCell<=19):
                        console.log(`light ${currentCell} changed state`);
                        console.log(`light ${leftCell} changed state`);
                        console.log(`light ${rightCell} changed state`);
                        console.log(`light ${topCell} changed state`);
                        console.log(`light ${bottomCell} changed state`);
                    break;
                    case  (currentCell>=22 && currentCell<=25):
                        console.log(`light ${currentCell} changed state`);
                        console.log(`light ${leftCell} changed state`);
                        console.log(`light ${rightCell} changed state`);
                        console.log(`light ${topCell} changed state`);
                        console.log(`light ${bottomCell} changed state`);
                    break;
                    case (currentCell===6 || currentCell===11 || currentCell===16 || currentCell===21):
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
    ); 
}

    render() {
        
        return(
            
        <div >
            <button id={this.props.id} className={this.state.lightOn 
            ? "on" 
            : "off"}
            
            onClick={this.toggleLight} >
             
            </button>    
            
       </div>
       
        );
       
    }

}
export default Grid;