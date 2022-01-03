import React from 'react';
import { Link } from 'react-router-dom';
import Teams from '../teams/Teams';

export default function Players({ name, position, selected }) {
  return (
    <div>
      <h4>{name}</h4>

      {selected && (
        <>
          <h5>{position}</h5>
        </>
      )}
    </div>
  );
}
