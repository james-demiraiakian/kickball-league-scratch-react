import React, { useEffect, useState } from 'react';
import Players from '../../components/players/Players';
import { getPlayers } from '../../services/players';
import { Link } from 'react-router-dom';

export default function PlayerList() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPlayers();
      setPlayers(data);
      setLoading(false);
      console.log(data);
    };
    fetchData();
  }, []);

  if (loading) return <h1>LOADING</h1>;

  return (
    <div>
      {players.map((p) => (
        <Link key={p.id} to={`/players/${p.id}`}>
          <Players name={p.name} />
        </Link>
      ))}
    </div>
  );
}
