import { client, checkError } from './client';

export async function getTeams() {
  const request = await client.from('teams').select().order('name');
  return checkError(request);
}

export async function getTeamById(id) {
  const request = await client.from('teams').select('*, players(*)').match({ id }).single();
  return checkError(request);
}
