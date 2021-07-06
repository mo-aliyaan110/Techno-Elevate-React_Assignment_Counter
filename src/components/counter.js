import React,{Component} from 'react';
import './counter.css';
class Counter extends Component{
    constructor(){
        super()
        this.state = {
            result:0
            
            
        }
    }
    countPlus = () =>{
         this.setState({result:++this.state.result})
    }

    reset = () =>{
        this.setState({result:0})
        
    }
    countMinus = () =>{
        this.setState({result:--this.state.result})
        
    }
    
        
    
    render(){
        return(
            <React.Fragment>
                <div id="parent">
                    <div id="screen">
                        {this.state.result}
                        
                        
                    </div>
                </div>
                <div className="parent2">
                    <div style={{backgroundColor: "rgb( 69, 173, 69 )"}} className="btn">
                        <button  onClick={this.countPlus} > 
                        <img className="image" src="./img/add.png" alt="add"/>
                        </button>
                    </div>

                    <div style={{backgroundColor: "rgb(224, 224, 87)"}} className="btn">
                        <button onClick={this.reset} >
                        <img className="image" src="./img/recycle (1).png" alt="reset"/>
                        </button>
                    </div>

                    <div style={{backgroundColor: "rgb(211, 24, 24)"}} className="btn">
                        <button  onClick={this.countMinus} > 
                        <img className="image" src="./img/delete.png" alt="sub"/> 
                        </button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Counter;