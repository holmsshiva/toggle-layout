import React from "react"
import Header from "./Header.js"

import ListView from "./views/ListView"
import GridView from "./views/GridView"
import ChartView from "./views/ChartView"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: [],
      viewType: "list"
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(response => response.json())
    .then(json => 
      this.setState({data: json}, ()=>{
        console.log(this.state.data)
      })
    )
  }
  toggleView = (type) => {
    this.setState({ viewType: type })
  }

  render(){
    return (
      <div>
        <Header toggleView={ this.toggleView } />
        {
          this.state.viewType == "list"
          ? <ListView data={this.state.data} /> 
          : this.state.viewType == "grid" 
          ? <GridView data={this.state.data} /> 
          : <ChartView data={this.state.data} /> 
        }
      </div>
    )
  }
}

export default App;
