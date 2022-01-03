import React from 'react';
import { Link } from 'react-router-dom';
import PlayerList from '../../view/Player/PlayerList';

export default function Teams({ name, city, state, selected, id }) {
  return (
    <div>
      <h2>{name}</h2>

      {selected && (
        <>
          <h3>
            {city}, {state}
          </h3>
          <h2>Players</h2>
          <PlayerList id={id} />
        </>
      )}
    </div>
  );
}
