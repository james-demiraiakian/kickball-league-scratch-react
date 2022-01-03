import React, { useEffect, useState } from 'react';
import Teams from '../../components/teams/Teams';
import { getTeams } from '../../services/teams';
import { Link } from 'react-router-dom';

export default function TeamList() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTeams();
      setTeams(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <h1>LOADING</h1>;

  return (
    <div>
      {teams.map((t) => (
        <Link key={t.id} to={`/teams/${t.id}`}>
          <Teams name={t.name} />
        </Link>
      ))}
    </div>
  );
}
