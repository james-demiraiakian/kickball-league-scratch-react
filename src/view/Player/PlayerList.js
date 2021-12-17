import React, { useEffect, useState } from 'react';
import Players from '../../components/players/Players';
import { getPlayers } from '../../services/players';

export default function PlayerList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPlayers();
      setPlayers(data);
      await console.log(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      {players.map((p) => (
        <Players key={p.name} {...p} />
      ))}
    </div>
  );
}
