import React from 'react'
import { ExampleComp } from 'my-first-library'
import 'my-first-library/dist/index.css'

// const App = () => {
//  // return <ExampleComponent text="Create React Library Example 😄" />
//  return (
//       <div className="App">
//          Hello World !
//       </div>
//    );
// }
// export default App

class App extends React.Component {
  constructor(props) {
     super(props);
     
     this.state = {
        data: ''
     }
     this.updateState = this.updateState.bind(this);
  };
  updateState() {

    ExampleComp.getCalendarList("Rahul").then(response => {
      console.log("girish calendarlist data",response)
    }).catch(error => {
      console.log("config validation failed ::", error);
    }); 
    // this.setState({data: 'Data updated...'})
  }
  render() {
     return (
        <div>
           <button onClick = {this.updateState}>Get Calendarlist</button>
           <h4>{this.state.data}</h4>
        </div>
     );
  }
}

export default App;
