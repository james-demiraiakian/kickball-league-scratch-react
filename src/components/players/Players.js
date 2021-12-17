import React from 'react';
import { Link } from 'react-router-dom';

export default function Players({ name }) {
  return (
    <div>
      <Link>{name}</Link>
    </div>
  );
}
