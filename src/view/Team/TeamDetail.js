import React, { useEffect, useState } from 'react';
import Teams from '../../components/teams/Teams';
import { getTeamsById } from '../../services/teams';

export default function TeamDetail(props) {
  const id = props.match.params.id;
  const [team, setTeam] = useState(null);
  console.log(id);
  useEffect(() => {
    getTeamsById(id).then(({ data }) => setTeam(data));
  }, [id]);
  return (
    <div>
      <Teams {...team} />
    </div>
  );
}
