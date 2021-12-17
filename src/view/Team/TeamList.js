import React, { useEffect, useState } from 'react';
import Teams from '../../components/teams/Teams';
import { getTeams } from '../../services/teams';
import { Link } from 'react-router-dom';

export default function TeamList() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTeams();
      setTeams(data);
      await console.log(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      {teams.map((t) => (
        <Link key={t.id} to={`/teams/${t.id}`}>
          <Teams {...t} />
        </Link>
      ))}
    </div>
  );
}
