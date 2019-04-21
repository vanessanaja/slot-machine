class App extends React.Component {
  render(){
    return (
      <div>
        <h1>Slot Machines</h1>
        <Machine
          slot1 = "🍒"
          slot2 = "🍇"
          slot3 = "🍏"
           />
           <Machine
          slot1 = "🍒"
          slot2 = "🍒"
          slot3 = "🍒"
           />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))