import React, { Component } from 'react';
import Count from "./Count";
import PickLucky from "./PickLucky";

class Counter extends Component {

      state = {
        counts: [40, 45, 90],
        luckyNum: null
      }

    
      generateNumber = () => {
        this.setState({
          counts: this.state.counts.map(() => Math.floor(Math.random() * 100) + 1)
        })
      }
      pickLuckyNum = () => {
        this.setState({
          luckyNum: this.state.counts[Math.floor(Math.random() * this.state.counts.length)]
        })
      }

      render() {

        return (
          <div>
             {
               this.state.counts.map((count, index) => (
                 <Count key={index} count={count}/>
               ))
             }
             <button onClick={this.generateNumber}>Generate</button>
             <PickLucky 
                pickLuckyNum={this.pickLuckyNum} 
                luckyNum={this.state.luckyNum}
              />
          </div>
        )
      }
}

export default Counter;
