import React from 'react';

export default function Teams({ name, city, state, selected }) {
  return (
    <div>
      <h4>{name}</h4>

      {selected && (
        <>
          <h5>
            {city}, {state}
          </h5>
          <div>player list here</div>
        </>
      )}
    </div>
  );
}
