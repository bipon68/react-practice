import React, { Component } from 'react';
import Count from "./Count";

class Counter extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //       count: this.props.count,
    //       counting: false
    //     }
    //     // this.handleIncrement = this.handleIncrement.bind(this)
    //     this.handleDecrement = this.handleDecrement.bind(this)
    //     this.handleReset = this.handleReset.bind(this)
    //     // this.makeTimer()
    //     // console.log(this.state)
    //   }
      state = {
        counts: [40, 45, 90]
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
      // handleDecrement = () => {
      //     this.setState((prevState) => ({
      //       count: prevState.count - 1
      //     }))
      // }

      // handleReset(){
      //   this.setState({
      //       count: 0
      //   })
      // }
      generateNumber = () => {

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
             {
               this.state.counts.map((count, index) => (
                 <Count key={index} count={count}/>
               ))
             }
             <button onClick={this.generateNumber}>Generate</button>
          </div>
        )
      }
}

export default Counter;
