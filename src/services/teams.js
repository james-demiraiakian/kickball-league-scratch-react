import { client, checkError } from './client';

export async function getTeams() {
  const request = await client.from('teams').select().order('teams');
  return checkError(request);
}

export async function getTeamsById(id) {
  const request = await client.from('teams').select('*, players(*)').match({ id });
  return checkError(request);
}
