import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
          count: this.props.count,
          counting: false
        }
        // this.handleIncrement = this.handleIncrement.bind(this)
        this.handleDecrement = this.handleDecrement.bind(this)
        this.handleReset = this.handleReset.bind(this)
        // this.makeTimer()
        // console.log(this.state)
      }
    
      // makeTimer(){
      //     setInterval(() => {
      //       this.setState({
      //         count: this.state.count + 1
      //       })
      //   }, 1000);
      // }
    
      handleIncrement = (number) => {
        console.log(this)
        this.setState((prevState) => ({
            count: prevState.count + number
        }))
        // changing state or update state based on existing state
        // this.setState({
        //   count: this.state.count + 1,
        //   counting: true
        // })
        // if any setState update or change depend on other setState
        // this.setState((prevState) => ({ 
        //   count: prevState.count + 1,
        //   counting: true
        // }))
        // this.setState((prevState) => ({ 
        //   count: prevState.count + 1,
    
        // }))
        // this.setState((prevState) => ({ 
        //   count: prevState.count + 1,
        // }))
        // this.setState((prevState) => {
        //   return{
        //     count: prevState.count + 1,
        //     counting: true
        //   } 
        // })
      }
      handleDecrement = () => {
          this.setState((prevState) => ({
            count: prevState.count - 1
          }))
      }

      handleReset(){
        this.setState({
            count: 0
        })
      }

      render() {
        // let counted;
        // if(this.state.counting ){
        //   counted = 'You are counting. Hurry'
        // }else{
        //   counted = 'You are not counting!'
        // }
        return (
          <div>
            <button onClick={this.handleIncrement.bind(this, 5)}>Increment</button>
            <button onClick={this.handleDecrement}>Decrement</button>
            <button onClick={this.handleReset}>Reset</button>
            <p>{this.state.counting ? 'You are counting. Hurry': 'You are not counting!'}</p>
             <p>Count : {this.state.count}</p>
          </div>
        )
      }
}

export default Counter;
