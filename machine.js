class Machine extends React.Component {
  render(){
    const {slot1, slot2, slot3} = this.props;
    const winner = (slot1 === slot2) && (slot2 === slot3);
    const emojiStyle = {fontSize: '50px', backgroundColor: 'blue'}
    return (
      <div className="Machine">
        <p style={emojiStyle}>{slot1} {slot2} {slot3}</p>
        <p className={winner ? 'winner' : 'loser'}>
        {winner ? 'Congrats, you won!' : "Sorry, You didn't win"}
        </p>
      </div>
    )
  }
}

