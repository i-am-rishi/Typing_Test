import React, { Component } from 'react';

export default class Container extends Component {
    state = {}
    render() { 
        const {word,button,onChange,counter,flag,deflag,refresh}=this.props;
        return ( 
            <div className="container">
                <div className="jumbotron" style={{marginTop:50, textAlign:"center"}}>
        <h1 className="display-4">{word}</h1>
                        <hr className="my-4"></hr>
                            <div className="form-group" >
                              <label htmlFor="formGroupExampleInput">Your Words Here</label><br/>
                              <span style={{fontSize:30}} >{counter}</span><br/>
                              <span style={{color:"green"}} > Correct Words: {flag}</span><br/>
                              <span style={{color:"red"}}> Incorrect Words: {deflag}</span><br/>
                              <span style={{fontSize:20, color:"indigo"}} > Your Typing Speed is : {flag+deflag} WPM</span><br/>
                              <input type="text" onKeyUp={onChange}  style={{textAlign:"center"}} className="form-control" id="formGroupExampleInput" placeholder="Press space ' ' after entering each word"/>
                            </div>
                        <button onClick={refresh} className="btn btn-primary btn-lg">{button}</button>
                </div>
            </div>
         );
    }
}
 

