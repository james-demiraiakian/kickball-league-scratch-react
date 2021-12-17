import React, { useEffect, useState } from 'react';
import { getTeams } from '../../services/teams';

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
      <h1>Team List</h1>
    </div>
  );
}
