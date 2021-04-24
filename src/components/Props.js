import React, {Component} from 'react';

const styles = {
  mar: {
    padding: '10px',
    marginTop:'10px',
  },  
  btn : {
    padding:'5px',
    marginLeft:'5px'
  },
  lh : {
    marginTop:'20px'
  },
  li : {
    lineHeight:2
  }
}

class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.brand}!</h2>;
  }
}

const lists = [
  "-Props are arguments passed into React components.",
  "-Send the 'brand' property from the Props component to the Car component",
  "-The component (Car) receives the argument as a props",
  "-Props are also how you pass data from one component to another, as parameters.",
  "* Parameters are variables listed as a part of the function definition.",
  "* Arguments are values passed to the function when it is invoked.",
  "parameter는 특정 함수에 들어가는 입력값을 어떻게 처리할지를 알려주기 위한 변수처럼 쓰이고 (width, height 이렇게) argument는 실제 입력되는 값을 말한다(10,6)"
]

export default class Props extends Component {
  render() {
    const carname = "Ford";
    return (
      <div style={styles.mar}>
        <Car brand={carname} />
        <ul style={styles.lh}>
          {lists.map(list => (
            <li style={styles.li}>{list}</li>
          ))}
        </ul>
      </div>
    )
  }
}

// https://www.w3schools.com/react/react_props.asp
// https://blog.naver.com/com_sci_n_lan/222252165737