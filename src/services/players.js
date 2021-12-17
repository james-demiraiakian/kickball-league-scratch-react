import { client, checkError } from 'react';

export async function getPlayers() {
  const request = await client.from('players').select().order('players');
  return checkError(request);
}

export async function getPlayersById(id) {
  const request = await client.from('players').select('*').match({ id });
  return checkError(request);
}
