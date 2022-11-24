import { PureComponent } from "react";

import "./styles.css";
import Player1Board from "./player1Board";
import Player2Board from "./player2Board";

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      newGame: true,
      isPlayingShipsStarted: false,
      isPlayer1Completed: false,
      isPlayer2Completed: false,
      isGameStarted: false,
      player1Ships: [],
      player2Ships: [],
      attackedP2Ship: "",
    };
  }

  player1Completed = (player1Ships) => {
    this.setState({ isPlayer1Completed: true, player1Ships: player1Ships });
  };

  player2Completed = (player2Ships) => {
    this.setState({ isPlayer2Completed: true, player2Ships: player2Ships });
  };

  startGame() {
    this.setState({ isGameStarted: true });
  }

  getAttackedShip = (val) => {
    this.setState({ attackedP2Ship: val });
  };

  render() {
    return (
      <section>
        {this.state.newGame && (
          <button
            className="newBtn"
            onClick={() => this.setState({ isPlayingShipsStarted: true })}
          >
            New Game
          </button>
        )}
        <div className={`${this.state.isGameStarted ? "flex-row" : ""} fields`}>
          {((this.state.isPlayingShipsStarted &&
            !this.state.isPlayer1Completed) ||
            this.state.isGameStarted) && (
            <Player1Board
              player1Completed={this.player1Completed}
              isGameStarted={this.state.isGameStarted}
            />
          )}
          {((this.state.isPlayer1Completed && !this.state.isPlayer2Completed) ||
            this.state.isGameStarted) && (
            <Player2Board
              player2Completed={this.player2Completed}
              isGameStarted={this.state.isGameStarted}
              attackShip={this.getAttackedShip}
            />
          )}
          {this.state.isPlayer2Completed && !this.state.isGameStarted && (
            <button className="startBtn" onClick={() => this.startGame()}>
              Start Game
            </button>
          )}
          {this.state.isGameStarted && this.state.attackedP2Ship !== "" && (
            <button className="attackBtn" onClick={() => this.attack()}>
              Start move
            </button>
          )}
        </div>
      </section>
    );
  }
}

export default App;
