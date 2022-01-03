import { client, checkError } from './client';

export async function getPlayers() {
  const request = await client.from('players').select().order('name');
  return checkError(request);
}

export async function getPlayersById(id) {
  const request = await client.from('players').select('*, teams(*)').match({ id }).single();
  return checkError(request);
}

export async function getPlayersByTeam(id) {
  const request = await client.from('players').select('*').eq('team_id', id);
  return checkError(request);
}
