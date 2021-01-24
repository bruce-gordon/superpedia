const API_KEY = process.env.REACT_APP_API_KEY

export const getData = (name) => {
  const proxyUrl = 'https://pure-hollows-05817.herokuapp.com/'
  return fetch(`${proxyUrl}https://comicvine.gamespot.com/api/characters/?api_key=${API_KEY}&filter=name:${name}&field_list=aliases,deck,id,image,name,publisher,real_name,site_detail_url&limit=10&format=json`)
  .then(resp => resp.json())
}

export const getCharacterById = (id) => {
  const proxyUrl = 'https://pure-hollows-05817.herokuapp.com/'
  return fetch(`${proxyUrl}https://comicvine.gamespot.com/api/character/4005-${id}/?api_key=${API_KEY}&field_list=aliases,deck,id,image,name,publisher,real_name,site_detail_url&format=json`)
  .then(resp => resp.json())
}
