import { PureComponent } from "react";

class Square extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeShip: false,
    };
  }
  placeShip(position) {
    this.props.playerShips(position);
    if (this.props.isFull) return;
    if (this.state.activeShip && this.props.isGameStarted) {
      this.setState({ activeShip: false });
    }
    if (this.props.attackedP2Ship === "") {
      this.setState({ activeShip: true });
    }
    this.setState({ activeShip: !this.state.activeShip });
  }
  render() {
    return (
      <div
        className={`square ${this.state.activeShip ? "ship" : ""}`}
        onClick={() => this.placeShip(this.props.number)}
      >
        {this.props.number}
      </div>
    );
  }
}

export default Square;
