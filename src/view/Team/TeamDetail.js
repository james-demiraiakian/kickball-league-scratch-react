import React, { useEffect, useState } from 'react';
import Teams from '../../components/teams/Teams';
import { getTeamById } from '../../services/teams';

export default function TeamDetail(props) {
  const id = props.match.params.id;
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTeamById(id);
      setTeam(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) return <h1>Loading</h1>;

  return <Teams {...team} selected />;
}
