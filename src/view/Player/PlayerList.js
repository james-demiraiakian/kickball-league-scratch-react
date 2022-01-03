import React, { useEffect, useState } from 'react';
import Players from '../../components/players/Players';
import { getPlayers, getPlayersByTeam } from '../../services/players';
import { Link } from 'react-router-dom';

export default function PlayerList(props) {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (props.id) {
        const data = await getPlayersByTeam(props.id);
        setPlayers(data);
        setLoading(false);
      } else {
        const data = await getPlayers();
        setPlayers(data);
        setLoading(false);
      }
    };
    fetchData();
  }, [props.id]);

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
