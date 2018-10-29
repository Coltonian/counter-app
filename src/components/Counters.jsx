import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counters: [
                { id: 1, value: 4, type: "d4", diceRoll: [1, 2, 3, 4]},
                { id: 2, value: 3, type: "d8", diceRoll: [1, 2, 3, 4, 5, 6]},
                { id: 3, value: 2, type: "d10", diceRoll: [1, 2, 3, 4, 5, 6, 7, 8]},
                { id: 4, value: 0, type: "d12", diceRoll: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]},
            ]
        };
    }


    render() { 
        return (
            <div>
                {this.state.counters.map(counter => 
                    <Counter key={counter.id} value={counter.value} type={counter.type} diceRoll={counter.diceRoll}>
                        {/* <h4>Counter #{counter.id}</h4> */}
                    </Counter>
                )}
            </div>
        );
    }
}
 
export default Counters;