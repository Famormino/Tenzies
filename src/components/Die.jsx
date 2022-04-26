export default function Die(props) {
  console.log(props);
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : null,
  };

  return (
    <div className="die-face" style={styles}>
      <h2 className="die-num" onClick={props.holdDice}>
        {props.number}
      </h2>
    </div>
  );
}
