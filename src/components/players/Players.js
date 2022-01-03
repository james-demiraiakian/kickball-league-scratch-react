import React from 'react';

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
