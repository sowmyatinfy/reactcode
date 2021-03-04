import React from "react";
import './App.css';
import SearchBox from './components/Home.js';

class App extends React.Component{
  constructor(props){
      super(props);
  }
  componentDidMount(){

  }
  render(){
    return(
    <div>
      <SearchBox placeholder = "Search a device here.."/>

    </div>)
      
  }
}

export default App;
