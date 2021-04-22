import React, {Component} from 'react';

const styles = {
  mar: {
    padding: '10px',
    marginTop:'10px'
  },  
  btn : {
    padding:'5px',
    marginLeft:'5px'
  },
  marTop:{
    marginTop:'20px'
  }
}

export default class Bind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:'Click Me',
      title2:'Click Me'
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({title:'Clicked'})
  }
  handleClick2() {
    this.setState({title2:'Clicked'})
  }
  render() {
    return (
      <div style={styles.mar}>
        <button style={styles.btn} onClick={this.handleClick}>{this.state.title}</button>
        <p style={styles.marTop}>If you need to have access to the parent component in the handler, you also need to bind the function to the component instance</p>
        <p style={styles.marTop}>
          <button style={styles.btn} onClick={() => this.handleClick2()}>{this.state.title2}</button>
        </p>
        <p style={styles.marTop}>Arrow Function in Render : Using an arrow function in render creates a new function each time the component renders, which may break optimizations based on strict identity comparison.</p>
      </div>
    )
  }
}
// https://reactjs.org/docs/faq-functions.html
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind