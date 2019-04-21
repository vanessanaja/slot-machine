class Machine extends React.Component {
  render(){
    const {slot1, slot2, slot3} = this.props;
    return (
      <div>
        <p>{slot1} {slot2} {slot3}</p>
        <p>Winner/Loser</p>
      </div>
    )
  }
}

