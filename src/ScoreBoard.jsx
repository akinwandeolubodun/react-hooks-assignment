import { useState } from "react";
//Bootstrap has already been downloaded for you
import "bootstrap/dist/css/bootstrap.min.css";
import Player from "./Player";
function ScoreBoard() {
  const [name, setName] = useState("");
  const [players, setPlayers] = useState([]);

  function addPlayer() {
    setPlayers([...players, { id: Date.now(), name: name }]);
  }

  function deletePlayer(id) {
    setPlayers(
      players.filter((player) => {
        return player.id !== id;
      })
    );
  }

  return (
    <div className="container">
      <div className="row  text-center">
        <h1>ScoreBoard</h1>
      </div>
      <div className="row">
        <div className="col-md-4 m-auto">
          <div className="input-group mb-3">
            {/* Modify input so that it is either connected to a ref or some kind of input state */}
            <input
              type="text"
              className="form-control"
              placeholder="New Player Name"
              aria-label="New Player Name"
              aria-describedby="addPlayer"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {/* add Add Player event handling to this button */}
            <button
              className="btn btn-outline-primary"
              type="button"
              id="addPlayer"
              onClick={addPlayer}
            >
              Add Player
            </button>
          </div>
        </div>
      </div>
      <div className="row m-auto">
        {players.map((player) => {
          return (
            <div className="col-md-4">
              {/* Make sure to pass the unique id as a key */}
              <Player key={player.id} name={player.name} deleteHandler={() => deletePlayer(player.id)}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ScoreBoard;