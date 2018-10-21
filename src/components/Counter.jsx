import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value,
        tags: [],
    };
    
    renderTags() {
        if(this.state.tags.length === 0) return <p>"There are no tags!"</p>;
        return <ul> {this.state.tags.map(tag => <li key={tag}> { tag } </li>)} </ul>;
    }

    handleIncrement = () => {
        this.setState({ value: this.state.value + 1 });
    }

    handleDecrement = () => {
        this.setState({ value: this.state.value - 1 });
    }

    render() { 
        return (
            <div>
                {/* {this.props.children} */}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                    onClick={this.handleIncrement} 
                    className="btn btn-secondary btn-sm m-2"
                >
                    Increment
                </button>
                <button onClick={this.handleDecrement} className="btn btn-secondary btn-sm m-2">Decrement</button>
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