import React, {useState} from 'react';

const styles = {
  mar: {
    margin:'10px'
  },
}

const Flexbox = () => {

  return (
    <div style={styles.mar} className="flexbox">
       <div>
         <h2>flex-direction</h2>
         <h3>flex-direction:row</h3>
         <div className="flex-direction flex-direction-row">
           <div className="divbox">a</div>
           <div className="divbox">b</div>
           <div className="divbox">c</div>
         </div>
         <h3>flex-direction:column</h3>
         <div className="flex-direction flex-direction-column">
           <div className="divbox">a</div>
           <div className="divbox">b</div>
           <div className="divbox">c</div>
         </div>
       </div>

       <div>
         <h2>flex</h2>
         <div className="flex-direction flex-direction-row">
           <div className="flex1 divbox">flex:1</div>
           <div className="flex2 divbox">flex:2</div>
           <div className="flex1 divbox">flex:1</div>
         </div>
       </div>

       <div>
         <h3>flex-basis</h3>
         <div className="flex-direction flex-basis">
           <div className="flex-basis-100px divbox">flex-basis 100px</div>
           <div className="flex-basis-200px divbox">flex-basis 200px</div>
           <div className="flex-basis-50p divbox">flex-basis 50%</div>
           <div className="flex-basis-auto divbox">flex-basis auto</div>
         </div>
       </div>

       <div>
         <h2>justify-content</h2>
         <h3>justify-content:space-around</h3>
         <div className="justify-content justify-content-space-around">
           <div className="divbox">a</div>
           <div className="divbox">b</div>
           <div className="divbox">c</div>
         </div>
         <h3>justify-content:space-between</h3>
         <div className="justify-content justify-content-space-between">
           <div className="divbox">a</div>
           <div className="divbox">b</div>
           <div className="divbox">c</div>
         </div>
         <h3>justify-content:space-evenly</h3>
         <div className="justify-content justify-content-space-evenly">
           <div className="divbox">a</div>
           <div className="divbox">b</div>
           <div className="divbox">c</div>
         </div>
       </div>

       <div>
         <h2>align-items</h2>
         <h3>align-items:flex-start</h3>
         <div className="align-items align-items-flex-start">
         <div className="divbox">a</div>
           <div className="divbox">b</div>
           <div className="divbox">c</div>
         </div>
         <h3>align-items:flex-end</h3>
         <div className="align-items align-items-flex-end">
         <div className="divbox">a</div>
           <div className="divbox">b</div>
           <div className="divbox">c</div>
         </div>
         <h3>align-items:center</h3>
         <div className="align-items align-items-center">
         <div className="divbox">a</div>
           <div className="divbox">b</div>
           <div className="divbox">c</div>
         </div>
       </div>
    </div>
    )
  }
  
export default Flexbox

//  https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox