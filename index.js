class App extends React.Component {
  render(){
    return (
      <div>
        <h1>Slot Machines</h1>
        <Machine />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))