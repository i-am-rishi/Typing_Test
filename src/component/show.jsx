import React, { Component } from 'react';
import NavBar from './navbar';
import words from './contents';
import Container from './container';
export default class Show extends Component {
    state = { 
        tokens:words,
        word:"Let's Go",
        counter:60,
        mapwords:"",
        flag:0,
        deflag:0
     }

     match=(e)=>{
         let flag=0;
         let deflag=0;
         let actualValue=e.target.value.split(" ");
         let inputValue=this.state.mapwords.split(" ");
         for(let i=0;i<actualValue.length;i++){
             if(actualValue[i]===inputValue[i])
             flag++;
             else
             deflag++;
            }
            e.target.value="";
            this.setState({flag,deflag});
        }

        refresh=()=>{
        this.setState({tokens:words,word:"Let's Go",counter:60,mapwords:"",flag:0,deflag:0})
        }

    wordChange=e=>{
        if(e.keyCode===32){
            let {mapwords}=this.state;
            this.initiateClock(e);
            const word=this.state.tokens[Math.floor(Math.random()*183)];
            mapwords+=" "+word;
            this.setState({word,mapwords});
    }
    }

    initiateClock=(e)=>{
        let {counter,word}=this.state;
        if(word==="Let's Go"){
        let interval=setInterval(()=>
        {
            counter=counter-1;
            this.setState({counter});
        },1000);
        setTimeout(()=>{clearInterval(interval); this.match(e);},60000);
    }
    }

    render() {
        const {word,counter,flag,deflag}=this.state;
        return (
            <div>
                <NavBar title="Typing Test"/>
                <Container
                word={word}
                counter={counter}
                onChange={this.wordChange}
                flag={flag}
                deflag={deflag}
                button="Reset"
                refresh={this.refresh}
                />
            </div>
         );
    }
}