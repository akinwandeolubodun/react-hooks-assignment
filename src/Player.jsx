import { useState } from "react";
import PropTypes from "prop-types";
function Player({name, deleteHandler}) {

  const [score, setScore] = useState(0);

  function incrementScore(){
    setScore(score + 1)
  }

  function decrementScore(){
    setScore(score - 1)
  }

  return (
    <div className="container-fluid border border-dark p-3 m-3">
      <div className="row justify-content-center">
        {/* Render Name here */}
        <h2 className="text-center">{name}</h2>
      </div>
      <div className="row justify-content-center">
        <p className="text-center fs-3">{score}</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* Add increment event handler */}
          <button className="btn btn-outline-primary w-100" onClick={incrementScore}>Add Point +</button>
        </div>
        <div className="col-md-6">
          {/* Add decrement event handler */}
          <button className="btn btn-outline-danger w-100" onClick={decrementScore}>
            Remove Point -
          </button>
        </div>
        <div className="col-md-6">
          {/* Add delete event handler */}
          <button className="btn btn-outline-dark w-100" onClick={deleteHandler}>
            Delete Player
          </button>
        </div>
      </div>
    </div>
  );
}

Player.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  deleteHandler: PropTypes.func
}
export default Player;
