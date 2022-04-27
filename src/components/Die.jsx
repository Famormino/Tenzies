export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : null,
  };

  return (
    <div className="die-face" style={styles} onClick={props.holdDice}>
      <h2 className="die-num">{props.number}</h2>
    </div>
  );
}
