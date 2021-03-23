import React, { Component } from 'react';
import "./main.css";
class Main extends Component {

    render() {
    return(
    <div className="mainWrap">
        <h1>Enter in your choices</h1>
        <div id="textareas">
        <textarea id="txt1"></textarea>
        <textarea id="txt2"></textarea>
        <textarea id="txt3"></textarea>
        <textarea id="txt4"></textarea>
        <textarea id="txt5"></textarea>
        <textarea id="txt6"></textarea>
        <textarea id="txt7"></textarea>
        <textarea id="txt8"></textarea>
        </div>
        <button onClick="TellMe()">TELL ME WHAT TO DO</button>
        <button>ADD CHOICES</button>
    </div>    
    )

}
}

export default Main