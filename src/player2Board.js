import { PureComponent } from "react";

import Square from "./square";

const cells = [
  "p2-1-1",
  "p2-1-2",
  "p2-1-3",
  "p2-1-4",
  "p2-1-5",
  "p2-2-1",
  "p2-2-2",
  "p2-2-3",
  "p2-2-4",
  "p2-2-5",
  "p2-3-1",
  "p2-3-2",
  "p2-3-3",
  "p2-3-4",
  "p2-3-5",
  "p2-4-1",
  "p2-4-2",
  "p2-4-3",
  "p2-4-4",
  "p2-4-5",
  "p2-5-1",
  "p2-5-2",
  "p2-5-3",
  "p2-5-4",
  "p2-5-5",
];

class Player2Board extends PureComponent {
  constructor() {
    super();
    this.state = {
      player2: [],
      isFull: false,
      attackedP2Ship: "",
      isConfirmed: false,
    };
  }

  placeShips = (p) => {
    let data = [...this.state.player2];
    if (this.state.player2.includes(p)) {
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
    this.setState({ player2: data });
  };

  setAttackedShip = (val) => {
    if (this.state.attackedP2Ship === "") {
      this.setState({ attackedP2Ship: val });
      console.log(this.state.attackedP2Ship);
      debugger;
    } else if (this.state.attackedP2Ship === val) {
      this.setState({ attackedP2Ship: "" });
      console.log(this.state.attackedP2Ship);
      debugger;
    } else if (
      this.state.attackedP2Ship !== "" &&
      this.state.attackedP2Ship !== val
    ) {
      alert("You can only attack one cell");
    }
    console.log(this.state.attackedP2Ship);
    this.props.attackShip(this.state.attackedP2Ship);
  };

  confirm() {
    if (this.state.player2.length === 8) {
      this.props.player2Completed(this.state.player2);
      this.setState({ isConfirmed: true });
    }
  }

  render() {
    return (
      <div className="board">
        <h3>Player 2 is playing</h3>
        <div>
          {cells.map((cell) => (
            <Square
              key={cell}
              number={cell}
              playerShips={
                !this.props.isGameStarted
                  ? this.placeShips
                  : this.setAttackedShip
              }
              isFull={this.state.isFull}
              isGameStarted={this.props.isGameStarted}
              attackedP2Ship={this.state.attackedP2Ship}
            />
          ))}
          {/* 
          <Square
            number={"p2-1-2"}
            playerShips={
              !this.props.isGameStarted ? this.placeShips : this.setAttackedShip
            }
            isFull={this.state.isFull}
            isAttacked={this.state.isAttacked}
          />
          <Square
            number={"p2-1-3"}
            playerShips={
              !this.props.isGameStarted ? this.placeShips : this.setAttackedShip
            }
            isFull={this.state.isFull}
            isAttacked={this.state.isAttacked}
          />
          <Square
            number={"p2-1-4"}
            playerShips={(val) =>
              !this.props.isGameStarted
                ? this.placeShips(val)
                : this.setState({ attackedP2Ship: val })
            }
            isFull={this.state.isFull}
          />
          <Square
            number={"p2-1-5"}
            playerShips={(val) =>
              !this.props.isGameStarted
                ? this.placeShips(val)
                : this.setState({ attackedP2Ship: val })
            }
            isFull={this.state.isFull}
          />
          <Square
            number={"p2-2-1"}
            playerShips={(val) =>
              !this.props.isGameStarted
                ? this.placeShips(val)
                : this.setState({ attackedP2Ship: val })
            }
            isFull={this.state.isFull}
          />
          <Square
            number={"p2-2-2"}
            playerShips={(val) =>
              !this.props.isGameStarted
                ? this.placeShips(val)
                : this.setState({ attackedP2Ship: val })
            }
            isFull={this.state.isFull}
          />
          <Square
            number={"p2-2-3"}
            playerShips={(val) =>
              !this.props.isGameStarted
                ? this.placeShips(val)
                : this.setState({ attackedP2Ship: val })
            }
            isFull={this.state.isFull}
          />
          <Square
            number={"p2-2-4"}
            playerShips={(val) =>
              !this.props.isGameStarted
                ? this.placeShips(val)
                : this.setState({ attackedP2Ship: val })
            }
            isFull={this.state.isFull}
          />
          <Square
            number={"p2-2-5"}
            playerShips={(val) =>
              !this.props.isGameStarted
                ? this.placeShips(val)
                : this.setState({ attackedP2Ship: val })
            }
            isFull={this.state.isFull}
          />
          <Square
            number={"p2-3-1"}
            playerShips={(val) =>
              !this.props.isGameStarted
                ? this.placeShips(val)
                : this.setState({ attackedP2Ship: val })
            }
            isFull={this.state.isFull}
          />
          <Square
            number={"p2-3-2"}
            playerShips={(val) =>
              !this.props.isGameStarted
                ? this.placeShips(val)
                : this.setState({ attackedP2Ship: val })
            }
            isFull={this.state.isFull}
          />
          <Square
            number={"p2-3-3"}
            playerShips={(val) =>
              !this.props.isGameStarted
                ? this.placeShips(val)
                : this.setState({ attackedP2Ship: val })
            }
            isFull={this.state.isFull}
          />
          <Square
            number={"p2-3-4"}
            playerShips={(val) =>
              !this.props.isGameStarted
                ? this.placeShips(val)
                : this.setState({ attackedP2Ship: val })
            }
            isFull={this.state.isFull}
          />
          <Square
            number={"p2-3-5"}
            playerShips={(val) =>
              !this.props.isGameStarted
                ? this.placeShips(val)
                : this.setState({ attackedP2Ship: val })
            }
            isFull={this.state.isFull}
          />
          <Square
            number={"p2-4-1"}
            playerShips={(val) =>
              !this.props.isGameStarted
                ? this.placeShips(val)
                : this.setState({ attackedP2Ship: val })
            }
            isFull={this.state.isFull}
          />
          <Square
            number={"p2-4-2"}
            playerShips={(val) =>
              !this.props.isGameStarted
                ? this.placeShips(val)
                : this.setState({ attackedP2Ship: val })
            }
            isFull={this.state.isFull}
          />
          <Square
            number={"p2-4-3"}
            playerShips={(val) =>
              !this.props.isGameStarted
                ? this.placeShips(val)
                : this.setState({ attackedP2Ship: val })
            }
            isFull={this.state.isFull}
          />
          <Square
            number={"p2-4-4"}
            playerShips={(val) =>
              !this.props.isGameStarted
                ? this.placeShips(val)
                : this.setState({ attackedP2Ship: val })
            }
            isFull={this.state.isFull}
          />
          <Square
            number={"p2-4-5"}
            playerShips={(val) =>
              !this.props.isGameStarted
                ? this.placeShips(val)
                : this.setState({ attackedP2Ship: val })
            }
            isFull={this.state.isFull}
          />
          <Square
            number={"p2-5-1"}
            playerShips={(val) =>
              !this.props.isGameStarted
                ? this.placeShips(val)
                : this.setState({ attackedP2Ship: val })
            }
            isFull={this.state.isFull}
          />
          <Square
            number={"p2-5-2"}
            playerShips={(val) =>
              !this.props.isGameStarted
                ? this.placeShips(val)
                : this.setState({ attackedP2Ship: val })
            }
            isFull={this.state.isFull}
          />
          <Square
            number={"p2-5-3"}
            playerShips={(val) =>
              !this.props.isGameStarted
                ? this.placeShips(val)
                : this.setState({ attackedP2Ship: val })
            }
            isFull={this.state.isFull}
          />
          <Square
            number={"p2-5-4"}
            playerShips={(val) =>
              !this.props.isGameStarted
                ? this.placeShips(val)
                : this.setState({ attackedP2Ship: val })
            }
            isFull={this.state.isFull}
          />
          <Square
            number={"p2-5-5"}
            playerShips={(val) =>
              !this.props.isGameStarted
                ? this.placeShips(val)
                : this.setState({ attackedP2Ship: val })
            }
            isFull={this.state.isFull}
          /> */}
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

export default Player2Board;
