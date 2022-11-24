import { PureComponent } from "react";

import Square from "./square";

class Player1Board extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      player1: [],
      isFull: false,
      attackedP1Ship: "",
    };
  }

  placeShips = (p) => {
    let data = [...this.state.player1];
    if (this.state.player1.includes(p)) {
      let index = data.findIndex((item) => item === p);
      data.splice(index, 1);
    } else if (data.length < 8) {
      data.push(p);
    } else {
      alert("you can not place more than 8 ships");
    }
    if (data.length === 8) {
      this.setState({ isFull: true });
    }

    this.setState({ player1: data });
  };

  confirm() {
    if (this.state.player1.length === 8) {
      this.props.player1Completed(this.state.player1);
    }
  }

  render() {
    return (
      <div className="board">
        <h3>Player 1 is playing</h3>
        <div>
          <Square
            number={"p1-1-1"}
            playerShips={this.placeShips}
            isFull={this.state.isFull}
          />
          <Square
            number={"p1-1-2"}
            playerShips={this.placeShips}
            isFull={this.state.isFull}
          />
          <Square
            number={"p1-1-3"}
            playerShips={this.placeShips}
            isFull={this.state.isFull}
          />
          <Square
            number={"p1-1-4"}
            playerShips={this.placeShips}
            isFull={this.state.isFull}
          />
          <Square
            number={"p1-1-5"}
            playerShips={this.placeShips}
            isFull={this.state.isFull}
          />
          <Square
            number={"p1-2-1"}
            playerShips={this.placeShips}
            isFull={this.state.isFull}
          />
          <Square
            number={"p1-2-2"}
            playerShips={this.placeShips}
            isFull={this.state.isFull}
          />
          <Square
            number={"p1-2-3"}
            playerShips={this.placeShips}
            isFull={this.state.isFull}
          />
          <Square
            number={"p1-2-4"}
            playerShips={this.placeShips}
            isFull={this.state.isFull}
          />
          <Square
            number={"p1-2-5"}
            playerShips={this.placeShips}
            isFull={this.state.isFull}
          />
          <Square
            number={"p1-3-1"}
            playerShips={this.placeShips}
            isFull={this.state.isFull}
          />
          <Square
            number={"p1-3-2"}
            playerShips={this.placeShips}
            isFull={this.state.isFull}
          />
          <Square
            number={"p1-3-3"}
            playerShips={this.placeShips}
            isFull={this.state.isFull}
          />
          <Square
            number={"p1-3-4"}
            playerShips={this.placeShips}
            isFull={this.state.isFull}
          />
          <Square
            number={"p1-3-5"}
            playerShips={this.placeShips}
            isFull={this.state.isFull}
          />
          <Square
            number={"p1-4-1"}
            playerShips={this.placeShips}
            isFull={this.state.isFull}
          />
          <Square
            number={"p1-4-2"}
            playerShips={this.placeShips}
            isFull={this.state.isFull}
          />
          <Square
            number={"p1-4-3"}
            playerShips={this.placeShips}
            isFull={this.state.isFull}
          />
          <Square
            number={"p1-4-4"}
            playerShips={this.placeShips}
            isFull={this.state.isFull}
          />
          <Square
            number={"p1-4-5"}
            playerShips={this.placeShips}
            isFull={this.state.isFull}
          />
          <Square
            number={"p1-5-1"}
            playerShips={this.placeShips}
            isFull={this.state.isFull}
          />
          <Square
            number={"p1-5-2"}
            playerShips={this.placeShips}
            isFull={this.state.isFull}
          />
          <Square
            number={"p1-5-3"}
            playerShips={this.placeShips}
            isFull={this.state.isFull}
          />
          <Square
            number={"p1-5-4"}
            playerShips={this.placeShips}
            isFull={this.state.isFull}
          />
          <Square
            number={"p1-5-5"}
            playerShips={this.placeShips}
            isFull={this.state.isFull}
          />
        </div>
        {!this.props.isGameStarted && (
          <button className="confirmBtn" onClick={() => this.confirm()}>
            Confirm
          </button>
        )}
      </div>
    );
  }
}

export default Player1Board;
