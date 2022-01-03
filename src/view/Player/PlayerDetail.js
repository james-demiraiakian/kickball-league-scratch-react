import React, { useState, useEffect } from 'react';
import Players from '../../components/players/Players';
import { getPlayersById } from '../../services/players';

export default function PlayerDetail(props) {
  const id = props.match.params.id;
  const [player, setPlayer] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPlayersById(id);
      setPlayer(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) return <h1>LOADING</h1>;

  return <Players {...player} selected />;
}
