import React, {Component} from "react";
import ReactDOM from "react-dom";
import Example from './Example';
import Parent from './Parent';
import Friends from './Friends';

console.log("React : ", React);
console.log("ReactDOM : ", ReactDOM);

//Typechecking With PropTypes - https://reactjs.org/docs/typechecking-with-proptypes.html

class App extends Component {

  constructor(){
    super()
    this.state = {
      count: 0,
      counting: false
    }
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



  render() {
    // let counted;
    // if(this.state.counting ){
    //   counted = 'You are counting. Hurry'
    // }else{
    //   counted = 'You are not counting!'
    // }
    return (
      <div>
        <p>{this.state.counting ? 'You are counting. Hurry': 'You are not counting!'}</p>
         <p>Count : {this.state.count}</p>
        <Example name="Bipon" />
        <Parent country="Bangladesh"/>
        <Friends friends={['Bipon', 'Ankon', 'Mahfuz', 'Shazol']}/>
      </div>
    )
  }
}

export default App;
