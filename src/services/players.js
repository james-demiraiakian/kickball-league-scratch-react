import { client, checkError } from './client';

export async function getPlayers() {
  const request = await client.from('players').select().order('name');
  return checkError(request);
}

export async function getPlayersById(id) {
  const request = await client.from('players').select('*').match({ id });
  return checkError(request);
}
