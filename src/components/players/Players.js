import React from 'react';
import { Link } from 'react-router-dom';

export default function Players({ name, position, team_id, selected }) {
  return (
    <div>
      <h4>{name}</h4>

      {selected && (
        <>
          <h5>{position}</h5>
          <h5>Team Info</h5>
        </>
      )}
    </div>
  );
}
