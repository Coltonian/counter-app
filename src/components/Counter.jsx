import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value,
        diceRoll: this.props.diceRoll,
        rollValue: 0,
        numberOfDice: [],
        // tags: [],
    };
    
   // renderTags() {
   //    return <ul> {this.state.tags.map(tag => <li key={tag}> { tag } </li>)} </ul>;
   //  }

    handleIncrement = () => {
        this.setState({ numberOfDice: [...this.state.numberOfDice, 1]});
    }

    handleDecrement = () => {
        let numberOfDice = [...this.state.numberOfDice];
        numberOfDice.pop();
        this.setState({ numberOfDice: [...numberOfDice]});
    }

    handleRoll = () => {
        let rollValue = Math.floor(Math.random() * this.props.diceRoll.length);
        this.setState({ rollValue: this.state.diceRoll[rollValue]});
    }

    render() { 
        return (
            <div className="Coltonian">
                {/* {this.props.children} */}
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm m-2">(+)</button>
                <button onClick={this.handleDecrement} className="btn btn-secondary btn-sm m-2">(-)</button>
                <button onClick={this.handleRoll} className="btn btn-secondary btn-sm m-2">Roll Dice</button>
                <button className="btn btn-secondary btn-sm m-2">{this.props.type}</button>
                
                {this.state.numberOfDice.map((value, index) => {
                   return <span key={index} className={this.getBadgeClasses()}>{this.state.rollValue}</span>
                })}
                
            </div>
        );
    }


    formatCount() {
        let count = this.state.value;
        return count === 0 ? "Zero" : count; 
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }
}
 
export default Counter;