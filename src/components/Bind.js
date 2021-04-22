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
    marginTop:'50px'
  }
}

export default class Bind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:'Click Me'
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({title:'Clicked'})
  }
  render() {
    return (
      <div style={styles.mar}>
        <button style={styles.btn} onClick={this.handleClick}>{this.state.title}</button>
        <p style={styles.marTop}>If you need to have access to the parent component in the handler, you also need to bind the function to the component instance</p>
        <p></p>
      </div>
    )
  }
}
// https://reactjs.org/docs/faq-functions.html
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind