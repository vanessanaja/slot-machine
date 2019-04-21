class Machine extends React.Component {
  render(){
    const {slot1, slot2, slot3} = this.props;
    const winner = (slot1 === slot2) && (slot2 === slot3);
    return (
      <div>
        <p>{slot1} {slot2} {slot3}</p>
        <p>{winner ? 'Congrats, you won!' : "Sorry, You didn't win"}</p>
      </div>
    )
  }
}

