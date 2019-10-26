import React, { Component } from "react";
import "./App.css";
import Typography from '@material-ui/core/Typography';
import Smurfs from "./Smurfs";
import SmurfsForm from "./SmurfsForm";

class App extends Component {
  render() {
    return (
      <div className="App">

        <Typography>SMURFS! 2.0 W/ Redux</Typography>

        <SmurfsForm/>

        <Smurfs/>
        
      </div>
    );
  }
}

export default App;
