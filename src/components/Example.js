import React, {Component} from "react";
import PropTypes from "prop-types";
//Typechecking With PropTypes - https://reactjs.org/docs/typechecking-with-proptypes.html

// const Example = (props) => {
//   console.log('Functional Props', props)
//   return(
//     <div>
//       <h2>Welcome {props.name}. functional component</h2>
//     </div>
//   )
//}

class Example extends Component {
    constructor(){
      super()
    }
    render() {
      console.log('Class Props', this.props)
      return (
        <div>
            <h3>Welcome {this.props.name}</h3>
        </div>
      )
    }
  }

Example.propTypes = {
  name: PropTypes.string.isRequired
}
Example.defaultProps = {
  name: 'Sajib'
}


  export default Example;